import  React,{ Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
}from "react-native";

import Util from './../util';


function ImageItem ({imageUri,titleText}){
    return(
        <View style={styles.image_item}>
            <Image style={[styles.image,styles.shadow]} source={{uri:imageUri}}></Image>
            <Text style={styles.title} numberOfLines={2}>{titleText}</Text>
        </View>
        // <View style={styles.image_item}>
        // <Image style={[styles.image,styles.shadow]} source={{uri:"gold_box"}}></Image>
        // <Text>标题</Text>
        // </View>
    );
}

class recommend extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         // title:this.props.title,
    //         // title11:this.state.title11
    //     }
    // }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Text1}>{this.props.title}</Text>
                <View style={styles.image_views}>
                    <ImageItem imageUri="gold_box" titleText="标题标题标题标题标题标题标题标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题标题标题标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题" ></ImageItem>
                    <ImageItem imageUri="gold_box" titleText="标题" ></ImageItem>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10
    },
    image_views:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        backgroundColor:'blue',
    },
    image_item:{
        width: (Util.size.width-40)/4,
        height:157,
        alignItems:'center',
        backgroundColor:'red'
    },
    image:{
        height:120,
        width: (Util.size.width-40)/4,
        backgroundColor:'red'
    },
    shadow:{
        shadowOpacity:1,
        shadowColor:'#ccc',
        shadowOffset:{width: Util.pixle, height:Util.pixle}
    },
    Text1:{
        color:'#333333',
        marginBottom:5,
        fontSize:17,
        marginTop:10
    },
    title:{
        marginTop:5,
        fontSize:13,
        color:'#666666'
    }
});


module.exports = recommend;