/** */
import React, {useState, createRef} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Loader from './Components/Loader';
import StyleRegister from './Styles/StyleRegister';
import { ImageSignUp } from './LinkImage/Image';
import { EmailRegisterList, NameRegisterList, PasswordRegisterList, PhoneRegisterList, ScrollViewList } from './List/listRegister';

const styles = StyleRegister;

const RegisterScreen = (props) => {
  const No = false;
  const Yes = true;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(No);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(No);
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {alert('Please fill Name🧑!') ; return;};
    if (!userEmail) {alert('Please fill Email 📧');return;};
    if (!userPhone) {alert('Please fill Phone📳');return;};
    if (!userPassword) {alert('Please fill Password🔒');return;};
    //Show Loader
    setLoading(Yes);
    var dataToSend = {
      user_name: userName,
      user_email: userEmail,
      user_phone: userPhone,
      user_password: userPassword,
    };
    
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);}
    formBody = formBody.join('&');

    fetch('http://localhost:3000/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataToSend),
})
.then((response) => response.json())
.then((responseJson) => {
  setLoading(false);
  console.log(responseJson);
  if (responseJson.status == 1) {
    setIsRegistraionSuccess(true);
    console.log('Registration Successful. Please Login to proceed');
  } else {
    setErrortext('Registration Unsuccessful');
  }
})
.catch((error) => {
  setLoading(false);
  console.error(error);
});

  };
  
  if (isRegistraionSuccess) {
    return (
      <View
        style={{flex: 1,backgroundColor: '#F5DEB3',justifyContent: 'center',}}>
        <Image
          source={require('../Image/aboutreact.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}/>
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={PageLogIn}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  };
//even
  //name
  const NameTextInput = (userName) => setUserName(userName);
  const onSubmitEditingName = () => emailInputRef.current && emailInputRef.current.focus();
  //Email
  const EmailTextInput = (userEmail) => setUserEmail(userEmail);
  const onSubmitEditingEmail = () => ageInputRef.current && ageInputRef.current.focus();
  //Phone
  const PhoneTextInput = (userPhone) => setUserPhone(userPhone);
  const onSubmitEditingPhone = () => addressInputRef.current && addressInputRef.current.focus();
  // Passwod
  const PasswordTextInput = (userPassword) => setUserPassword(userPassword);
  // it is in return
  const PageLogIn  = () => props.navigation.navigate('LoginScreen');
  const errorTextInput = (<Text style={styles.errorTextStyle}> {errortext} </Text>);

  function ButtonRegister(){
    return(
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Click Register 🍒</Text>
      </TouchableOpacity>
    );
  };
  
  function ImageSignUpCompomem() {
    return (
      <View style={styles.centerImage}>
        <Image source={ImageSignUp} style={styles.imageSize}/>
      </View>
    );
  }

  return (
    <View style={styles.backgroundColorPage}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps={ScrollViewList}
        contentContainerStyle={styles.ScrollViewContentContainerStyle}>
        <ImageSignUpCompomem/>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={NameTextInput}
              underlineColorAndroid={NameRegisterList.underlineColorAndroid}
              placeholder={NameRegisterList.placeholder}
              placeholderTextColor={NameRegisterList.placeholderTextColor}
              autoCapitalize={NameRegisterList.autoCapitalize}
              returnKeyType={NameRegisterList.returnKeyType}
              onSubmitEditing={onSubmitEditingName}
              blurOnSubmit={No}/>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={EmailTextInput}
              underlineColorAndroid={EmailRegisterList.underlineColorAndroid}
              placeholder={EmailRegisterList.placeholder}
              placeholderTextColor={EmailRegisterList.placeholderTextColor}
              keyboardType={EmailRegisterList.keyboardType}
              ref={emailInputRef}
              returnKeyType={EmailRegisterList.returnKeyType}
              onSubmitEditing={onSubmitEditingEmail}
              blurOnSubmit={No}/>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={PhoneTextInput}
              underlineColorAndroid={PhoneRegisterList.underlineColorAndroid}
              placeholder={PhoneRegisterList.placeholder}
              placeholderTextColor={PhoneRegisterList.placeholderTextColor}
              keyboardType={PhoneRegisterList.keyboardType}
              ref={ageInputRef}
              returnKeyType={PhoneRegisterList.returnKeyType}
              onSubmitEditing={onSubmitEditingPhone}
              blurOnSubmit={No}/>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={PasswordTextInput}
              underlineColorAndroid={PasswordRegisterList.underlineColorAndroid}
              placeholder={PasswordRegisterList.placeholder}
              placeholderTextColor={PasswordRegisterList.placeholderTextColor}
              autoCapitalize={PasswordRegisterList.autoCapitalize}
              ref={addressInputRef}
              returnKeyType={PasswordRegisterList.returnKeyType}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={No}
              secureTextEntry={Yes}/>
          </View>
          {errortext != '' ? errorTextInput : null}
          <ButtonRegister/>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

