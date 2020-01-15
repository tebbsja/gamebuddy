import React, { Component } from 'react';
import { Text,View, Image, Button, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { FAB } from 'react-native-paper';
import  Footerx from '../Components/Footerx';
import {MonopolyDeckController} from "../Controllers/MonopolyDeckController";


export default class MonopolyDeckScreen extends Component<Props>{
  constructor(props){
    super(props);

    const cc = require('../assets/images/cc.png');
    const chance = require('../assets/images/chance.png');

    this.controller = new MonopolyDeckController(this);

    this.state = {cc: cc, chance: chance};

    this.handleCC = this.handleCC.bind(this);
    this.handleChance = this.handleChance.bind(this);


  }

  handleCC(){
      this.controller.handleCC();
  }
  handleChance(){
      this.controller.handleChance();
  }
 



    render() {
        return (
          <View style={{flex:1}}>
            <View style={{ flex: 1, backgroundColor:'#FFEEEE'}}>
                <TouchableHighlight underlayColor='none' onPress={this.handleCC} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{}}source={this.state.cc}/>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='none' onPress={this.handleChance} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{}}source={this.state.chance}/>
                </TouchableHighlight>
            </View> 
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}