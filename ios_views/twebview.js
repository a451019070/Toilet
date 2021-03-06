import React , {Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import { WebView } from 'react-native-webview';
import Util from './util';




class TWebView extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            isError:false
        }
    }

    render(){

        return(
            <View style={styles.container}>
                {
                    this.state.isError?
                    <View>
                        <Text>网络有问题</Text>
                    </View>
                    : <WebView 
                    onError={this._showError.bind(this)}
                    source={{uri:this.props.url}}
                    startInLoadingState={true}
                    />
                }
            </View>
        );
    }


    _showError(){
        this.setState({
            isError:true
        });
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    erroInfo:{
        marginTop:100,
        justifyContent:"center",
        alignItems:"center"
    }
});

module.exports = TWebView;