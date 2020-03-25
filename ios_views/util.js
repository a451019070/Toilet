import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
 } from 'react-native';



 module.exports =  {
     size:{
         width:Dimensions.get('window').width,
         height:Dimensions.get('window').height
     },
     get:function(url,successCallBack,faildCallBack){
        fetch()
        .then((response)=> response.json)
        .then((responseJeso)=>{
            successCallBack(responseJeso);
        })
        .catch((error)=>{
            faildCallBack(error);
        });
    },
     pixel: 1 / PixelRatio.get()
 };