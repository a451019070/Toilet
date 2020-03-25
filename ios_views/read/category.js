import  React,{ Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
}from "react-native";

import Util from './../util';

function ItemView ({titleText}){
    return(
        <View style={styles.item}>
            <Text style={styles.title}>
                {titleText}
            </Text>
        </View>
    );
}

class category extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Text1}>分类</Text>
                <View style={styles.row}>
                    <ItemView titleText="互联网"></ItemView>
                    <ItemView titleText="散文"></ItemView>
                    <ItemView titleText="笑话"></ItemView>
                    <ItemView titleText="管理"></ItemView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
        // marginTop:10,
        justifyContent:'space-around',
    },
    item:{
        marginTop:5,
        height:53,
        width:(Util.size.width-30)/2,
        borderColor:'#999',
        borderWidth:Util.pixel,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    Text1:{
        color:'#333333',
        marginBottom:5,
        fontSize:17,
    },
    title:{
        color:'#666',
        fontSize:17,
        fontWeight:'400'

    }
});

module.exports = category;