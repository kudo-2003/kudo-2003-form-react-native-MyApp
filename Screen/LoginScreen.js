// Import React and Component
import React, { useState, createRef } from 'react';
import { TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyleLogin from './Styles/StyleLogin';
import Loader from './Components/Loader';
import { EmailList, PasswordList, ScrollViewList } from './List/listLogin';
import { ImageLogIn } from './LinkImage/Image';

// call css
const styles = StyleLogin;


//tạo component: LoginScreen 
const LoginScreen = ({ navigation }) => {
  const Yes = true;
  const No = false;
  const [userEmail, setUserEmail] = useState('');// React Hook: useState
  const [userPassword, setUserPassword] = useState(''); // function :userPassword, setUserPassword
  const [loading, setLoading] = useState(No);
  const [errortext, setErrortext] = useState('');
  
//even
  const RegisterScreenPage = () => navigation.navigate('RegisterScreen');
  const errorText = (<Text style={styles.errorTextStyle}> {errortext} </Text>)
    //email
  const EmailTextInput = (UserEmail) => setUserEmail(UserEmail);  
  const onSubmitEditingEmail = () => passwordInputRef.current && passwordInputRef.current.focus();
    //password
  const PasswordTextInput = (UserPassword) => setUserPassword(UserPassword);
  
  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {alert('Please fill Email 📧');return;}
    if (!userPassword) {alert('Please fill Password 🔒');return;}
    setLoading(Yes);
    let dataToSend = {user_email: userEmail, user_password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);}
    formBody = formBody.join('&');
      //API
    fetch('YOUR_API_URL', {
      method: 'POST',
      body: formBody,
      headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    }).then((response) => response.json()).then(async (responseJson) => {
        setLoading(No);
        if (responseJson.status == 1) {
          await AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
          navigation.replace('DrawerNavigationRoutes');
        } else {setErrortext('Please check your email id or password 😫');}}).catch((error) => {setLoading(No);console.error(error);});
  };

  function ButtonClick() {
    return(
      <Text style={styles.registerTextStyle}
          onPress={RegisterScreenPage}>
        New Here ? Register</Text>
    );
  };

  return (
    //các thẻ con trong LoginScreen
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps={ScrollViewList}
        contentContainerStyle={styles.ScrollViewLogin}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.centerlogin}>
              <Image source={ImageLogIn} style={styles.imageLogin}/>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={EmailTextInput}
                placeholder={EmailList.placeholder}
                placeholderTextColor={EmailList.placeholderTextColor}
                autoCapitalize={EmailList.autoCapitalize}
                keyboardType={EmailList.keyboardType}
                returnKeyType={EmailList.returnKeyType}
                onSubmitEditing={onSubmitEditingEmail}
                underlineColorAndroid={EmailList.underlineColorAndroid}
                blurOnSubmit={No}/>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={PasswordTextInput}
                placeholder={PasswordList.placeholder}
                placeholderTextColor={PasswordList.placeholderTextColor}
                keyboardType={PasswordList.keyboardType}
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={No}
                secureTextEntry={Yes}
                underlineColorAndroid={PasswordList.underlineColorAndroid}
                returnKeyType={PasswordList.returnKeyType}/>
            </View>
            {errortext != '' ? errorText : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOG IN 🍓</Text>
            </TouchableOpacity>
            <ButtonClick/>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;


