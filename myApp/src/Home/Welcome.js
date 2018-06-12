import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default class Login extends Component {

    username='';
    password='';
    // constructor(props){
    //     super(props);
    //     this.toMainpage=this.toMainpage.bind(this);

    // }
    // 账号框文本变化的回调函数，该回调函数接受的参数为：输入框当前文本内容
    // 通过绑定这个函数给onChangeText就能实现实时更新username变量
    onUsernameChange=(newUsername)=>{
        console.log(this.username);
        this.username=newUsername;
    };
    onPasswordChange=(newPassword)=>{
        console.log(this.password);
        this.password=newPassword;
    }

    // 判断登录
    // 账号密码匹配则跳转主界面
    // 账号密码不匹配弹出密码或账号错误
    login=()=>{
        if(this.username=='Admin'&& this.password=='123'){
            alert('登录成功');
            const {navigate} = this.props.navigation;
            navigate('MainPage');
            
        }else{
            alert('登录失败');
        }
    };

    render(){
        return (
            <View style={styles.container}>
                  <View style={styles.item}>
                    <Text style={styles.textStyle}>用户名：</Text>
                    <TextInput
                    autoFocus={true}
                    clearTextOnFocus={true}
                    placeholder={this.username}
                    placeholderTextColor={'#fff'}//提示文本的颜色
                    clearButtonMode='while-editing'
                    style={{flex:1}}
                    onChangeText={this.onUsernameChange}>
                    </TextInput>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>用户密码：</Text>
                    <TextInput
                    autoFocus={true}
                    clearTextOnFocus={true}
                    placeholder={this.password}
                    placeholderTextColor={'#fff'}//提示文本的颜色
                    secureTextEntry={true}//如果是密码，需要开启这个属性 
                    clearButtonMode='while-editing'
                    style={{flex:1}}
                    onChangeText={this.onPasswordChange}>
                    </TextInput>
                </View>
                <TouchableHighlight style={styles.login}
                underlayColor='transparent' onPress={()=>this.login()}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableHighlight>
            </View>
        )
    }

    // 登录进入主界面

    toMainpage(){
        const {navigate} = this.props.navigation;
        navigate('MainPage');
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',

    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    textStyle:{
        fontSize: 18,
        color:'black',
        marginRight: 10,
    },
    login:{
        height:40,
        backgroundColor:'green',
        margin:20,
        justifyContent:'center',
    },
    loginText:{
        fontSize:20,
        alignSelf: 'center',
        color:'#fff',
    },
})