// Import React and Component 
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyleDrawerNavigationRoutes from './Styles/StyleDrawerNavigationRoutes';

//call it
const styles = StyleDrawerNavigationRoutes;
const No = false;
const Yes = true;

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(Yes);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(No);
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),);}, 5000);}, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}/>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}/>
    </View>
  );
};

export default SplashScreen;


