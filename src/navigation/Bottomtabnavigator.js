import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
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
                name="Report"
                component={Profile}
                options={{
                    tabBarLabel: 'Report',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/bottomtab/report.png')}
                            style={{ height: 30, width: 30, tintColor: 'gray' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="add_money"
                component={Profile}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => <CustomAddMoneyButton />,
                }}
            />
            <Tab.Screen
                name="split"
                component={Profile}
                options={{
                    tabBarLabel: 'Split',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/bottomtab/split.png')}
                            style={{ height: 30, width: 30 }}
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
        backgroundColor: 'transparent', // Transparent background
      },
});