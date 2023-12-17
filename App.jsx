import Bottomtabnavigator from './src/navigation/Bottomtabnavigator';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function app(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Bottomtabnavigator" component={Bottomtabnavigator} options={{gestureEnabled:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default app;