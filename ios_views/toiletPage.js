import React , {Component}from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import TWebView from './twebview';

class toiletPages extends Component {
    
    render(){
        return(
            <View style={styles.container}>
                <TWebView url="https://live.51lm.tv"></TWebView>
            </View>
            
        );
    }
}

const win = Dimensions.get('window');

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignContent:'center'
    }
})

module.exports = toiletPages;