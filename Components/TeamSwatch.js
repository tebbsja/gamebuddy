import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import { ColorPicker, fromHsv} from 'react-native-color-picker';
import { FAB } from 'react-native-paper';


export default class TeamSwatch extends Component<Props>{
    constructor(props){
      super(props);

      var teamColors = global.Settings.getTeamColors();
      var swatchStatus = global.Settings.getSwatchStatus();
      var active = swatchStatus[this.props.id];

      var color = teamColors[this.props.id];

      this.state = {
          id: this.props.id,
          active: active,
          color: color,
          revealModal: false,
          numTeams: global.Settings.getNumTeams(),
      }


      this.handleColorChange = this.handleColorChange.bind(this);
      this.handlePress = this.handlePress.bind(this);
      this.saveColor = this.saveColor.bind(this);
      this.test = this.test.bind(this);

      
    
  
  }
  test(){
      if(global.Settings.getNumTeams() > this.props.id){
          if(!this.state.active){
            this.setState({color: '#F2F2F2'});
            global.Settings.setSwatch(this.props.id, true);
            this.setState({active: true});


          }
      }else{
          this.setState({color: 'white'});
          global.Settings.setTeamColor(this.props.id, 'white');
          global.Settings.setSwatch(this.props.id, false);
          this.setState({active: false});
      }
  }
  handlePress(){
      if(global.Settings.getNumTeams()> this.props.id){
          this.setState({active: true});
          this.setState({revealModal: true});

      }
  }

  handleColorChange(color){
      
    var c = fromHsv(color);
    this.setState({color: c});
  }
  saveColor(){
      this.setState({revealModal: false});
      this.setState({active: true});

      //if not hex set to hex red
      if (this.state.color[0] != '#' || this.state.color == '#F2F2F2'){
        global.Settings.handleTeamColorChange(this.props.id, '#ff0000');
        this.setState({color: 'red'});

      }
      else{
        global.Settings.handleTeamColorChange(this.props.id, this.state.color);

      }





  }



  render(){
      return(
        <View >                
        <Modal 
            transparent={false}
             visible={this.state.revealModal} 
             animationType={'slide'}
             style={{flex: 1, padding: 100}}
       > 

        <View style={{flex:1}}></View>
        <ColorPicker style={{flex: 2, margin:50, }}
            onColorChange={color => this.handleColorChange(color) }
        />
        <View style={{ flex:1}}>
        <FAB
            style={{marginHorizontal: 130, backgroundColor: 'blue',  alignItems: 'center'}}
            label="Save"

            onPress={this.saveColor}
        />  

        </View>


        </Modal>
        <TouchableOpacity   onPress={this.handlePress} style={{backgroundColor: this.state.color, height: 40, width: 40, margin: 10}}></TouchableOpacity>

        </View>
      );
  }
}