import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Footerx extends Component<Props>{
  constructor(props){
    super(props);

    this.handleDiceTab = this.handleDiceTab.bind(this);
    this.handleCardsTab = this.handleCardsTab.bind(this);
    this.handleScoreboardTab = this.handleScoreboardTab.bind(this);
    this.handleTimerTab = this.handleTimerTab.bind(this);
    this.handleSettingsTab = this.handleSettingsTab.bind(this);

}

handleDiceTab(){
  this.props.navigation.navigate('Dice');
}

handleCardsTab(){
  this.props.navigation.navigate('Cards');
}

handleScoreboardTab(){
  this.props.navigation.navigate('Scoreboard');

}

handleTimerTab(){
  this.props.navigation.navigate('Timer');
}

handleSettingsTab(){
  this.props.navigation.navigate('Settings');
}

    render() {
        return (

            <Footer >
              <FooterTab>
                <Button onPress={this.handleDiceTab}>
                  <Image style={{width:50, height: 50}} source={require('../assets/images/diceicongreen.png')}/>                
                </Button>

                <Button onPress={this.handleCardsTab}>
                  <Image style={{width:50, height: 50}} source={require("../assets/images/cardsiconred.png")}/>                
                </Button>

                <Button onPress={this.handleScoreboardTab}>
                  <Image style={{width:50, height: 50}} source={require( "../assets/images/bluescoreboard.png")}/>                
                </Button>

                <Button onPress={this.handleTimerTab}>
                  <Image style={{width:50, height: 50}} source={require( "../assets/images/yellowhourglass.png")}/>                
                </Button>

                <Button onPress={this.handleSettingsTab}>
                  <Image style={{width:50, height: 50}} source={require('../assets/images/settings.png')}/>                
                </Button>
          
              </FooterTab>
            </Footer>

        );
      }
}