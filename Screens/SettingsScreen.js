import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import  Footerx from '../Components/Footerx';
import Slider from '@react-native-community/slider';
import {SettingsController} from '../Controllers/SettingsController';
import { ColorPicker, fromHsv} from 'react-native-color-picker';
import { throwStatement } from '@babel/types';
import { FAB } from 'react-native-paper';
import TeamSwatch from '../Components/TeamSwatch';





export default class SettingsScreen extends Component<Props>{
  constructor(props){
    super(props);



    this.state = {
        numDice: global.Settings.getNumDice(),
        numTeams: global.Settings.getNumTeams(),
        timerSec: global.Settings.getTimerSec(),
        colorPicker: false,
        teamIDcolor: -1,
        teamColors: ['blue', 'black', '#F2F2F2', '#F2F2F2'],
    }

    

    global.Settings.setScreen(this);
    this.controller = global.Settings;


    this.handleSettings = this.handleSettings.bind(this);
    this.handleDiceSlide = this.handleDiceSlide.bind(this);
    this.handleTeamSlide = this.handleTeamSlide.bind(this);
    this.handleTimerSlide = this.handleTimerSlide.bind(this);
    this.back = this.back.bind(this);

    this.test = this.test.bind(this);
    this.saveColor = this.saveColor.bind(this);
    this.colorChange = this.colorChange.bind(this);

    this.swatch1 = React.createRef();
    this.swatch2 = React.createRef();
    this.swatch3 = React.createRef();
    this.swatch4 = React.createRef();




  }
  colorChange(color){


  }
  handleSettings(){
      alert("somethign");
  }
  back(){
      this.props.navigation.goBack();
  }
  test(id){
      this.setState({teamIDcolor: id});
      this.setState({colorPicker: true});
  }

  saveColor(){
      this.setState({colorPicker: false});
      //set color
      
  }
  handleTimerSlide(value){
      this.controller.handleTimerSlide(value);
  }
 

  handleDiceSlide(value){
      
      this.controller.handleDiceSlide(value);
  }

  handleTeamSlide(value){
    this.controller.handleTeamSlide(value);
    this.swatch1.current.test();
    this.swatch2.current.test();
    this.swatch3.current.test();
    this.swatch4.current.test();

}
    render() {
        return (
          <View style={{flex:1}}>
            <View style={{flex:1}}>

                <View style={{padding: 5}}>
                    <Text style={{fontSize: 40}}>Settings</Text>
                </View>

                <View style={{flex:1, padding: 15}}>
                    <Text style={{fontSize:20}}>Number of Dice: {this.state.numDice}</Text>
                    <Slider
                        style={{width: 250}}
                        minimumValue={1}
                        maximumValue={6}
                        step={1}
                        value={this.state.numDice}
                        onValueChange={(value) => this.handleDiceSlide(value)}
                    />
                </View>

                <View style={{flex:1, padding: 15}}>
                    <Text style={{fontSize:20}}>Timer Seconds: {this.state.timerSec}</Text>
                    <Slider
                        style={{width: 250}}
                        minimumValue={1}
                        maximumValue={60}
                        step={1}
                        value={this.state.timerSec}
                        onValueChange={(value) => this.handleTimerSlide(value)}
                    />
                </View>

                


                <View style={{flex:1, padding: 15}}>
                    <Text style={{fontSize:20}}>Number of Teams: {this.state.numTeams}</Text>
                    <Slider
                        style={{width: 250}}
                        minimumValue={1}
                        maximumValue={4}
                        step={1}
                        value={this.state.numTeams}
                        onValueChange={(value) => this.handleTeamSlide(value)}
                    />
                    


                    <View style={{flexDirection: 'row', flex:1,}}>
                        <TeamSwatch ref={this.swatch1} id={0} active={true}/>
                        <TeamSwatch ref={this.swatch2} id={1} active={true}/>
                        <TeamSwatch ref={this.swatch3} id={2} active={false}/>
                        <TeamSwatch ref={this.swatch4} id={3} active={false}/>
                        



                    </View>
                </View>

                <View style={{flex:.5, alignItems: 'center', }}>
                <FAB
                  style={{backgroundColor: 'blue', alignItems: 'center'}}
                  large
                  label="Save"
                  
                  color='white'
                  onPress={this.back}
                />

                </View>


            </View>
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}