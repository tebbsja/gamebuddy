import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import  Footerx from '../Components/Footerx';
import {CardsController} from "../Controllers/CardsController";


export default class CardsScreen extends Component<Props>{
  constructor(props){
    super(props);

    this.controller = new CardsController(this);

    this.handleSettings = this.handleSettings.bind(this);
    this.handleDeck = this.handleDeck.bind(this);
    this.handleMonopoly = this.handleMonopoly.bind(this);
    this.handleScattergories = this.handleScattergories.bind(this);
    this.handleMadGab = this.handleMadGab.bind(this);


  }
  componentDidMount(){
    this.props.navigation.addListener(
        'willFocus',
        payload => {
            this.forceUpdate();
        }
    );
}
handleDeck(){
  this.controller.handleDeck();
}

handleMonopoly(){
  this.controller.handleMonopoly();
}
handleScattergories(){
  this.controller.handleScattergories();
}
handleMadGab(){
  this.controller.handleMadGab();
}
  handleSettings(){
    this.controller.handleSettings();
  }
    render() {
        return (
          <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor:'#FFEEEE'}}>
              <TouchableHighlight onPress={this.handleDeck} style={{flex: 1, justifyContent: 'center', padding: 15}}>
                <Text style={{fontFamily: 'Avenir',color: '#801515', fontSize: 35}}>52 Card Deck</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.handleMonopoly} style={{padding: 15, flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Avenir',color: '#801515', fontSize: 35,}}>Monopoly</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.handleScattergories} style={{padding: 15, flex: 1, justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Avenir',color: '#801515', fontSize: 35}}>Scattergories</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.handleMadGab} style={{padding: 15, flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Avenir',color: '#801515', fontSize: 35}}>Mad Gab</Text>
              </TouchableHighlight>

            </View>
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}