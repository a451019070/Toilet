import  React,{ Component } from "react";
import 'react-native-gesture-handler';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
}from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Categofy from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';
import Util from './util';


class Line extends Component{
    render(){
        return(
            <View style={styles.line}>
                
            </View>
        );
    }
}

class readView extends Component {
    constructor(){
        super();
        this.state = {
            isShow:true
        };
    }
    
    render(){
        return (
            <View style={styles.container}>
            <Search></Search>
            <Line></Line>
            {
                this.state.isShow?
                <ScrollView style={styles.container}>
                <Topic data={this.state.readDataList} ></Topic>
                <Line></Line>
                <Recommend title="热门推荐"></Recommend>
                <Line></Line>
                <Categofy></Categofy>
                <Line></Line>
                <Recommend title="清新一刻" ></Recommend>
                </ScrollView>
                :null
            }    
        </View>
        );
    }

    componentDidMount(){
        let readDataList = Util.getReadData;
        this.setState=({
            isShow:true,
            readDataList:readDataList
        });
        console.log('阅读数据'+readDataList[0].programName)
    }
}


const Stack = createStackNavigator();

function read({navigation}) {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Read" component={readView} options={{title:"阅读",headerShown:false}}/>
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    line:{
        borderColor:'red',
        borderWidth: Util.pixel,
        marginTop:10
    }
});
  
export default read;




