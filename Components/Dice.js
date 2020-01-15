import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import { ColorPicker, fromHsv} from 'react-native-color-picker';
import { FAB } from 'react-native-paper';


export default class Dice extends Component<Props>{
    constructor(props){
      super(props);

      this.state = {
          die: this.props.die,
          locked: false,
    
    }

    this.handlePress = this.handlePress.bind(this);
      }


    handlePress(){

    }
    



  render(){
      return(
  
        <TouchableOpacity   onPress={this.handlePress} >
        <Image style={{margin: 10, width:100, height: 100}} source={this.state.die} />  
        </TouchableOpacity>

  
      );
  }
}