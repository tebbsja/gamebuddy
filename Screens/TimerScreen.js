import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import  Footerx from '../Components/Footerx';
import { TimerController } from "../Controllers/TimerController";

export default class TimerScreen extends Component<Props>{
  constructor(props){
    super(props);

    this.controller = new TimerController(this);



    this.state = {time: global.Settings.getTimerSec(), status: "Start"};

    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  handleReset(){
    this.controller.handleReset();
  }

  componentDidMount(){
    this.props.navigation.addListener(
        'willFocus',
        payload => {
            this.setState({time: global.Settings.getTimerSec()});
        }
    );
}

  handleStart(){
    if(this.state.status === 'Start'){
      this.controller.handleStart();
    }
    else{
      this.controller.handleStop();
    }

  }




    render() {
        return (
          <View style={{flex: 1}}>
            <View style={{backgroundColor:'#FDFFE1', flex: 1}}>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 200, color: "#D7DD31"}}>:{this.state.time}</Text>
              </View>

              <View style={{padding:5, flexDirection: 'row', justifyContent: 'space-around',flex: 1, alignItems: 'center'}}>
                <Button rounded onPress={this.handleStart} style={{backgroundColor: "#ADA900"}}><Text style={{ fontSize: 30,color: "#FDFFE1"}}> {this.state.status}</Text></Button>
                <Button rounded onPress={this.handleReset} style={{backgroundColor: "#ADA900"}}><Text style={{ fontSize: 30,color: "#FDFFE1"}}> Reset</Text></Button>

              </View>


            </View>
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}