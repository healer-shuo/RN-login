// 路由入口主文件
import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import { AppNav } from './src/Navigator/navigator';

export default class Appmain extends Component{

    render(){
        return (
            <AppNav />
        )
    }
}
