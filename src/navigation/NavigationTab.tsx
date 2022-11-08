import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserScreen, StatisticScreen } from '../screens';
import { colors } from '../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';


import { ProductsStack } from './ProductsStack';
import { OrdersStack } from './OrdersStack';


const Tab = createBottomTabNavigator();

export const NavigationTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="CaptureScreen"
            detachInactiveScreens={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ProductsStack':
                            iconName = 'camera';
                            !(focused) && (iconName += '-outline')
                            break;
                        case 'OrdersStack':
                            iconName = 'list';
                            !(focused) && (iconName += '-outline')
                            break;
                        case 'StatisticScreen':
                            iconName = 'bar-chart';
                            !(focused) && (iconName += '-outline');
                            break;
                        case 'UserScreen':
                            iconName = 'person';
                            !(focused) && (iconName += '-outline')
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />
                },
                tabBarActiveTintColor: colors.secondary,
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false,
                unmountOnBlur: true,

                
            })}
        >
            <Tab.Screen name="ProductsStack" component={ProductsStack} />
            <Tab.Screen name="OrdersStack" component={OrdersStack} />
            <Tab.Screen name="StatisticScreen" component={StatisticScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />

        </Tab.Navigator>
    );
}


