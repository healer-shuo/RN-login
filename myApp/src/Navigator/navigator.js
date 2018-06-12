import {StackNavigator}  from 'react-navigation';
import StateTest from '../SetState/StateTest';
import MyScene from '../MyScene/MyScene';
import Welcome from '../Home/Welcome';
import MainPage from '../Home/MainPage';


export const AppNav=StackNavigator({
    Welcome:{screen:Welcome,navigationOptions:{header:null}},//默认显示首页
    MyScene:{screen:MyScene,navigationOptions:{header:null}},
    MainPage:{screen:MainPage,navigationOptions:{header:null}},
    StateTest:{screen:StateTest,navigationOptions:{header:null}},
});