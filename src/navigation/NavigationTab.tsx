import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { OrderScreen, UserScreen } from '../screens';
import { colors } from '../theme/globalTheme';
import { StatisticScreen } from '../screens/StatisticScreen';
import Icon from 'react-native-vector-icons/Ionicons';


import { ProductsStack } from './ProductsStack';


const Tab = createMaterialBottomTabNavigator();

export const NavigationTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="CaptureScreen"
            activeColor={colors.secondary}
            inactiveColor="gray"
            labeled={false}
            barStyle={{ backgroundColor: colors.primary }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ProductsStack':
                            iconName = 'camera';
                            !(focused) && (iconName += '-outline')
                            break;
                        case 'OrderScreen':
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
                }
            })}
        >


            <Tab.Screen name="ProductsStack" component={ProductsStack} />
            <Tab.Screen name="OrderScreen" component={OrderScreen} />
            <Tab.Screen name="StatisticScreen" component={StatisticScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />

        </Tab.Navigator>
    );
}


