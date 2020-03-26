import  React,{ Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
}from "react-native";

import Util from './../util';

class ImageView extends Component{
    constructor(imageUri){
        super(imageUri);
        this.state = {
            imageUri: this.props.imageUri
        }
    }
    render(){
        return(
            <View style={styles.img_item}>
                <Image 
                style={styles.img}
                source={{uri:this.props.imageUri}}
                >
                </Image> 
            </View>
        );
    }
}

class topic extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            topicData:props.topicData
        }
        console.log("推荐",props.topicData)
    }

    render(){
        var views = [];

        for (var i in [1,2]){
            views.push(
                <ImageView imageUri={'http://cdn.51lm.tv/'+this.props.topicData[i].coverPic}></ImageView>
            );
        }

        return(
            <View style={styles.container}>
                <Text style={styles.Text1}>推荐专题</Text>
                <View style={styles.img_view}>
                     {views}
                </View>
                <Text style={styles.Text2}>查看更多同期专题 &gt;</Text>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10
    },
    img_view:{
        flexDirection:'row'
    },
    img_item:{
        flex:1
    },
    img:{
        width:(Util.size.width-30)/2,
        height:80,
        backgroundColor:'red',
        borderRadius:5,
        resizeMode:'cover'
    },
    Text1:{
        color:'#333333',
        marginBottom:5,
        fontSize:17
    },
    Text2:{
        color:'#666',
        marginTop:5,
        fontSize:12,
        fontWeight:'300'
    }
});


module.exports = topic;