
import 'react-native-gesture-handler';
// Import React and Component
import React from 'react';
// Import  Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';

const Stack = createStackNavigator();

// call it
const No = false;

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: No}}/>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Return Log In', 
          headerStyle: {backgroundColor: '#FFA500', },
          headerTintColor: '#fff', 
          headerTitleStyle: {fontWeight: 'bold', },}}/>
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: No}}/>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: No}}/>
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{headerShown: No}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
