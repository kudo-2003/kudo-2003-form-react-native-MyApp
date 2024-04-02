
// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
          <Text
            style={{fontSize: 20,textAlign: 'center',marginBottom: 16,}}>
            Hi conten
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{fontSize: 18,textAlign: 'center',color: 'grey',}}>
          Splash, Login and Register {'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          hung94079@donga.edu.vn
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
