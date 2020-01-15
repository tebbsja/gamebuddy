import React, { Component } from 'react';
import { Text,View, Image, Button, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { FAB } from 'react-native-paper';
import  Footerx from '../Components/Footerx';
import {MadGabController} from "../Controllers/MadGabController";


export default class MadGabScreen extends Component<Props>{
  constructor(props){
    super(props);

    const card = require('../assets/images/mg.png');

    this.controller = new MadGabController(this);

    this.state = {card: card};

    this.handleCard = this.handleCard.bind(this);


  }

  handleCard(){
      this.controller.handleCard();
  }




    render() {
        return (
          <View style={{flex:1}}>
            <View style={{ flex: 1, backgroundColor:'#FFEEEE'}}>
                <TouchableHighlight underlayColor='none' onPress={this.handleCard} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{height: 500, width: 333,}}source={this.state.card}/>
                </TouchableHighlight>

            </View> 
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}