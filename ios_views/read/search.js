import  React,{ Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
}from "react-native";

import Util from './../util';
class search extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                style={styles.search_input} 
                placeholder="搜索"
                placeholderTextColor='#666666'
                >

                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        paddingRight:10,
    },
    search_input:{
        height:35,
        borderWidth: Util.pixel,
        borderColor:'#999999',
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10
    }
});

module.exports = search;