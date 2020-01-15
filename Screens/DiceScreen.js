import React, { Component } from 'react';
import { Text,View, Image, Button, FlatList, SafeAreaView } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { FAB } from 'react-native-paper';
import  Footerx from '../Components/Footerx';
import Dice from '../Components/Dice';
import {DiceController} from "../Controllers/DiceController";

export default class DiceScreen extends Component<Props>{
  constructor(props){
    super(props);

    var numDie = global.Settings.getNumDice();
    this.state = {
      die: [], numDie: numDie,
    };

    this.controller = new DiceController(this);

    this.handleRoll = this.handleRoll.bind(this);

  }
  handleRoll(){
    let dieState = this.controller.handleRoll(global.Settings.getNumDice(),6);
    this.setState({die: dieState});

  }




    render() {
        return (
          <View style={{flex:1}}>
            <View style={{ flex: 1, backgroundColor:'#defde1'}}>
              <View style={{flex: 1}}>
              <SafeAreaView >
                <FlatList 
                  horizontal={false}
                  numColumns={3}
                  data={this.state.die}
                  renderItem={({item }) => 
                  <Image style={{margin: 10, width:100, height: 100}} source={item} />                
                }
                keyExtractor={(item, index) => index.toString()}
                />
                </SafeAreaView>
                </View>

              <View style={{flex: 1, alignItems: 'center'}}> 

              <FAB
                  style={{position: 'absolute', backgroundColor: '#034500', alignItems: 'center'}}
                  large
                  label="Roll Dice"
                  icon="play"
                  color='#DEFDE1'
                  onPress={this.handleRoll}
                />
              
                </View>



            </View> 
            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}