import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
  } from 'react-native';

  export default class StateTest extends Component{
      static navigationOptions={
          title:'uuuu',

      };
      constructor(props){
          super(props);
          this.state={
              size:80,
          }
          
      }
      render(){
          return(
              <View style={styles.container}>
                <Image source={require('../assets/love.png')} style={{width:this.state.size,height:this.state.size}}/>
                <Text onPress={()=>this.setState({
                    size:this.state.size+10})} style={styles.bigText}>吹呀吹
                </Text>
                <Text onPress={()=>this.setState({
                    size:this.state.size-10})} style={styles.smallText}>小一点呢
                </Text>
              </View>
          )
      }
  }
  const styles=StyleSheet.create({
      container:{
       
      },
      
      bigText:{
          color:'#7B68EE',
          fontSize: 20,
          textAlign:'center',
      },
      smallText:{
          color:'#0000CD',
          fontSize:20,
          textAlign:'center',
      }

  })