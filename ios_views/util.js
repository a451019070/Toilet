import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
 } from 'react-native';

import {programList as ReadDataList} from './read/readData.json';

 module.exports =  {
     size:{
         width:Dimensions.get('window').width,
         height:Dimensions.get('window').height
     },
     pixel: 1 / PixelRatio.get(),
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
    post:function(url,params,successCallBack,faildCallBack){
        fetch(url,{
            method:'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(params)
        })
        .then((response)=> response.json)
        .then((responseJeso)=>{
            console.log('utilPostSuccess',responseJeso)
            // return responseJeso;
             successCallBack(responseJeso)
        })
        .catch((error)=>{
            console.log('utilPostFaild',error)
            faildCallBack(error);
        });
    },
     getReadData:ReadDataList
 };