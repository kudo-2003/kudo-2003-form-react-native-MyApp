// Import React and Component
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyleSphlash from './Styles/StyleSplash';
import { ImageScreen } from './LinkImage/Image';
import { SplashList, useEffectList } from './List/listSplash';

const styles = StyleSphlash;

const SplashScreen = ({navigation}) => {
  const No = false;
  const Yes = true;
  const userID = 'user_id';
  const [animating, setAnimating] = useState(Yes);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(No);
      AsyncStorage.getItem(userID).then((value) =>
        navigation.replace(value === null ? useEffectList.tring1 : useEffectList.tring2 ),);}, 5000);}, []);

  return (
    <View style={styles.container}>
      <Image source={ImageScreen} style={styles.imageSphlash}/>
      <ActivityIndicator
        animating={animating}
        color={SplashList.color}
        size={SplashList.size}
        style={styles.activityIndicator}/>
    </View>
  );
};

export default SplashScreen;


