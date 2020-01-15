import React, { Component } from 'react';
import { Text,View, Image, Button, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { FAB } from 'react-native-paper';
import  Footerx from '../Components/Footerx';
import {StandardDeckController} from "../Controllers/StandardDeckController";


export default class StandardDeckScreen extends Component<Props>{
  constructor(props){
    super(props);

    const back = require('../assets/images/backcard.png');

    this.controller = new StandardDeckController(this);

    this.state = {src: back,}

    this.handleCard = this.handleCard.bind(this);


  }

  handleCard(){
      this.controller.handleCard()
  }
 



    render() {
        return (
          <View style={{flex:1}}>
            <View style={{ flex: 1, backgroundColor:'#FFEEEE'}}>
                <TouchableHighlight underlayColor='none' onPress={this.handleCard} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 250, height: 375}}source={this.state.src}/>
                </TouchableHighlight>
            </View> 
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}