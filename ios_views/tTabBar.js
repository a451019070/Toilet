import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ToiletPage from './toiletPage';
import Read from './read';


const TabBar = createBottomTabNavigator();

class tTabbar extends Component{
    render(){
        return(
            <NavigationContainer>
                    <TabBar.Navigator>
                        <TabBar.Screen 
                        name='卫生间'
                        component={ToiletPage}
                        />
                        <TabBar.Screen 
                        name='阅读'
                        component={Read}
                        />
                        {/* <TabBar.Screen
                        name="天气"
                        component={
                            <View style={{backgroundColor:'red', flex:1}}></View>
                        }
                        />
                        <TabBar.Screen
                        name="设置"
                        component={
                            <View style={{backgroundColor:'blue', flex:1}}></View>
                        }
                        /> */}
                    </TabBar.Navigator>
                </NavigationContainer>
        );
    }
}

module.exports = tTabbar;