import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

function Bottomtabnavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: COLORS.dark,
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: COLORS.primary,
            })}>
            <Tab.Screen
                name={ROUTES.HOME_TAB}
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name={ROUTES.Profile_TAB}
                component={Profile}
                options={{
                    tabBarLabel: 'Report',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="chart-pie" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    )

}

export default Bottomtabnavigator;