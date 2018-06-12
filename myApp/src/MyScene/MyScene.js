import React ,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class MyScene extends Component {
    constructor(props){
        super(props);
        this.toNav=this.toNav.bind(this);
    }
    toNav(){
        const {navigate}=this.props.navigation;
        navigate('StateTest');
    }
    static defaultProps={
        title:'MyScene',
    };
    render(){
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                <Text onPress={()=>this.toNav()}>Hi! My name is {this.props.title}.</Text>
            </View>
        )
    }

}