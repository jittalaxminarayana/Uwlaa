import Bottomtabnavigator from './src/navigation/Bottomtabnavigator';
import { NavigationContainer } from '@react-navigation/native';

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