import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Histroy from '../screens/Histroy/Histroy';
import { COLORS } from '../screens/Styles/Styles';
import { StyleSheet, Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

function CustomAddMoneyButton() {
    return (
        <View style={styles.addMoneyContainer}>
            <Image
                source={require('../assets/bottomtab/add_money.png')}
                style={{ height: 60, width: 60, tintColor: 'green', backgroundColor: 'transparent'  }}
            />
        </View>
    );
}

function Bottomtabnavigator() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: COLORS.dark,
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: COLORS.primary,
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/bottomtab/home.png')}
                            style={{ height: 30, width: 30, tintColor: 'gray' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Histroy"
                component={Histroy}
                options={{
                    tabBarLabel: 'Histroy',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/bottomtab/history.png')}
                            style={{ height: 30, width: 30, tintColor: 'gray' }}
                        />
                    ),
                }}
            />
           
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/bottomtab/profile.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>

    )

}

export default Bottomtabnavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.white,
    },
    addMoneyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
});