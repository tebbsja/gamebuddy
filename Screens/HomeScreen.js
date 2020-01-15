import React, { Component } from 'react';
import { View,Button, TouchableHighlight, Image } from 'react-native';
import {SettingsController} from '../Controllers/SettingsController';


export default class HomeScreen extends Component<Props>{
    constructor(props){
        super(props);

        this.handleDiceClick = this.handleDiceClick.bind(this);
        this.handleTimerClick = this.handleTimerClick.bind(this);
        this.handleScoreboardClick = this.handleScoreboardClick.bind(this);
        this.handleCardsClick = this.handleCardsClick.bind(this);

        global.Settings = new SettingsController();


    }



    handleDiceClick(){
        this.props.navigation.navigate('Dice');
    }

    handleTimerClick(){
        this.props.navigation.navigate('Timer');

    }

    handleScoreboardClick(){
        this.props.navigation.navigate('Scoreboard');

    }

    handleCardsClick(){
        this.props.navigation.navigate('Cards');
    }

    render() {
        return (
          <View style={{  flex: 1 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableHighlight style={{ justifyContent: 'center', flex:1, backgroundColor: '#defde1'}} onPress={this.handleDiceClick}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={{width:100, height: 100}} source={require('../assets/images/greendice.png')}/>                
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={{ justifyContent: 'center', flex: 1, backgroundColor: '#FDFFE1'}} onPress={this.handleTimerClick}>
                    <View style={{alignItems: 'center'}}> 
                        <Image style={{width:100, height: 100}} source={require('../assets/images/yellowhourglass.png')}/>                
                    </View>
                </TouchableHighlight>
                
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableHighlight style={{ justifyContent: 'center', flex: 1, backgroundColor: '#EAECFF'}} onPress={this.handleScoreboardClick}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={{width:100, height: 100}} source={require('../assets/images/bluescoreboard.png')}/>                
                    </View>
                </TouchableHighlight>  

                <TouchableHighlight style={{ justifyContent: 'center', flex: 1, backgroundColor: '#FFEEEE'}} onPress={this.handleCardsClick}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={{width:100, height: 100}} source={require('../assets/images/cardsiconred.png')}/>                
                    </View>
                </TouchableHighlight>

            </View>
          </View>
        );
      }
}