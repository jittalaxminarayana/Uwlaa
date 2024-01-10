import Bottomtabnavigator from './src/navigation/Bottomtabnavigator';
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import Home from './src/screens/Home/Home';
import Transport from './src/screens/Transport/Transport';
import Movers from './src/screens/Movers/Movers';
import Manpower from './src/screens/Manpower/Manpower';
import Viewdetails from './src/screens/Viewdetails/Viewdetails';

const Stack = createNativeStackNavigator();

function app(){
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LoginScreen"> 
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{gestureEnabled:false}} />
        <Stack.Screen name="Bottomtabnavigator" component={Bottomtabnavigator} options={{gestureEnabled:false}} />
        <Stack.Screen name="Home" component={Home} options={{gestureEnabled:false}} />
        <Stack.Screen name="Transport" component={Transport} options={{gestureEnabled:false}} />
        <Stack.Screen name="Movers" component={Movers} options={{gestureEnabled:false}} />
        <Stack.Screen name="Manpower" component={Manpower} options={{gestureEnabled:false}} />
        <Stack.Screen name="Viewdetails" component={Viewdetails} options={{gestureEnabled:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default app;