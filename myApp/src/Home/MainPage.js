import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

export default class MainPage extends Component{
    constructor(props){
        super(props);
        
    }
    goBack(){
        const {navigate} =this.props.navigation;
        navigate('Welcome');
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>欢迎来到主界面</Text>
                <Text style={styles.textStyle}>您当前的用户名是：</Text>
                <Text style={styles.textStyle}>您当前的密码是：</Text>
                <Text onPress={()=>this.goBack()}>返回登录页面</Text>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
    },
    textStyle:{
        fontSize: 18,
        color:'black',
        marginRight: 10,
    },

})