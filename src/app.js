import React from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { Button,Text } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import Home from './modules/Home/containers/home'
// import Drawer from './modules/sections/components/drawernav'
import { useWindowDimensions } from 'react-native';

const LoginNavigator = createStackNavigator(
    {
        Login: {
            screen: Home,
            navigationOptions:{
                title: "Inicie Sesión"
            }
        }

    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        Login: LoginNavigator,
    },
    {
        initialRouteName : 'Login'
    }
);

// aaaa
export default createAppContainer(SwitchNavigator)
