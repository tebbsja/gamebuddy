import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, } from 'native-base';
import { FAB } from 'react-native-paper';
import  Footerx from '../Components/Footerx';
import {ScoreboardController} from "../Controllers/ScoreboardController";
import { ColorPicker, fromHsv, toHsv} from 'react-native-color-picker';



export default class ScoreboardScreen extends Component<Props>{
  constructor(props){
    super(props);

    this.state = {
      numPlayers: global.Settings.getNumTeams(),
      teamColors: global.Settings.getTeamColors(),
      teamHighlights: global.Settings.getTeamHighlights(),
      teamAccents: global.Settings.getTeamAccents(),
      player1: 0, player2: 0, player3: 0, player4: 0}

    this.controller = new ScoreboardController(this);

    this.handleSettings = this.handleSettings.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);


  }
  handleSettings(){
    this.controller.handleSettings();
  }
  handleDecrement(id){
    var score = 0;
    var nuScore = 0;
    if(id==0){
      score = this.state.player1;
      nuScore = this.controller.handleDecrement(score);
      this.setState({player1: nuScore});
    }else if (id==1){
      score = this.state.player2;
      nuScore = this.controller.handleDecrement(score);
      this.setState({player2: nuScore});
    }else if (id ==2){
      score = this.state.player3;
      nuScore = this.controller.handleDecrement(score);
      this.setState({player3: nuScore});
    }else if (id ==3){
      score = this.state.player4;
      nuScore = this.controller.handleDecrement(score);
      this.setState({player4: nuScore});
    }
  }
  handleIncrement(id){
    var score = 0;
    var nuScore = 0;
    if(id==0){
      score = this.state.player1;
      nuScore = this.controller.handleIncrement(score);
      this.setState({player1: nuScore});
    }else if (id==1){
      score = this.state.player2;
      nuScore = this.controller.handleIncrement(score);
      this.setState({player2: nuScore});
    }else if (id ==2){
      score = this.state.player3;
      nuScore = this.controller.handleIncrement(score);
      this.setState({player3: nuScore});
    } else if (id ==3){
      score = this.state.player4;
      nuScore = this.controller.handleIncrement(score);
      this.setState({player4: nuScore});
    }
  }

  componentDidMount(){
    this.props.navigation.addListener(
        'willFocus',
        payload => {
            this.forceUpdate();
        }
    );
}

  displayScoreboard(){
    console.log(this.state.numPlayers);

    if(global.Settings.getNumTeams() == 1){
      return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: this.state.teamHighlights[0], flexDirection: 'column'}}>



            <View style={{flex:3, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontFamily: "Digital-7", fontSize: 250, color: this.state.teamColors[0]}} >
                {this.state.player1}
              </Text>         
            </View>

            <View style={{flex: .75,  alignItems: 'flex-start',flexDirection:'row',  justifyContent: 'space-between',}}>
              <FAB
                style={{backgroundColor: this.state.teamAccents[0] , margin: 15}}
                large
                icon="minus"
                color={this.state.teamHighlights[0]}
                onPress={() => this.handleDecrement(0)}
              />

              <FAB
                style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                large
                icon="plus"
                color={this.state.teamHighlights[0]}
                onPress={() => this.handleIncrement(0)}
              />               
            </View>
          </View>
        </View>
      );
    }
    else if(global.Settings.getNumTeams() == 2){
    
      return(
        <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: this.state.teamHighlights[0], flexDirection: 'column'}}>
  

              <View style={{flex:3, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontFamily: "Digital-7", fontSize: 210, color: this.state.teamColors[0]}} >
                  {this.state.player1}
                </Text>         
              </View>

              <View style={{flex:1.5,  alignItems: 'flex-start',flexDirection:'row',  justifyContent: 'space-between',}}>
                <FAB
                  style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                  large
                  icon="minus"
                  color={this.state.teamHighlights[0]}
                  onPress={() => this.handleDecrement(0)}
                />

                <FAB
                  style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                  large
                  icon="plus"
                  color={this.state.teamHighlights[0]}
                  onPress={() => this.handleIncrement(0)}
                />               
              </View>
            </View>

            <View style={{backgroundColor: this.state.teamHighlights[1], flexDirection: "column", flex: 1}}>
              <View style={{flex:.4}}></View>
              <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontFamily: "Digital-7", fontSize: 210, color: this.state.teamColors[1]}} >
                    {this.state.player2}
                </Text>          
              </View>

              <View style={{ flexDirection:'row',  justifyContent: 'space-between',}}>
                <FAB
                    style={{backgroundColor: this.state.teamAccents[1], margin: 15}}
                    large
                    icon="minus"
                    color={this.state.teamHighlights[1]}
                    onPress={() => this.handleDecrement(1)}
                  />

                <FAB
                  style={{backgroundColor: this.state.teamAccents[1], margin: 15}}
                  large
                  icon="plus"
                  color={this.state.teamHighlights[1]}
                  onPress={() => this.handleIncrement(1)}
                />
              </View>

            </View>
        </View>
      );
    }
    else if (global.Settings.getNumTeams() == 3){
      return (
        <View style={{flex: 1}}>
          <View style={{backgroundColor: this.state.teamHighlights[0], flexDirection: "column", flex: 1}}>
            <View style={{flex:.5}}></View>
              <View style={{flex:2,}}>
                <View style={{ flex:1,flexDirection:'row',  }}>

                  <View>
                    <FAB
                        style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                        large
                        icon="minus"
                        color={this.state.teamHighlights[0]}
                        onPress={() => this.handleDecrement(0)}
                      />
                  </View>

                  <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: "Digital-7", fontSize: 160, color: this.state.teamColors[0]}} >
                      {this.state.player1}
                    </Text>  
                  </View>

                  <View>
                    <FAB
                      style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                      large
                      icon="plus"
                      color={this.state.teamHighlights[0]}
                      onPress={() => this.handleIncrement(0)}
                    />
                  </View>  

                </View>
       
              </View>

            </View>

            <View style={{backgroundColor: this.state.teamHighlights[1], flexDirection: "column", flex: 1}}>
            <View style={{flex:.5}}></View>

              <View style={{flex:2,}}>
                <View style={{ flex:1,flexDirection:'row',  }}>

                  <View>
                    <FAB
                        style={{backgroundColor: this.state.teamAccents[1], margin: 15}}
                        large
                        icon="minus"
                        color={this.state.teamHighlights[1]}
                        onPress={() => this.handleDecrement(1)}
                      />
                  </View>

                  <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: "Digital-7", fontSize: 160, color: this.state.teamColors[1]}} >
                      {this.state.player2}
                    </Text>  
                  </View>

                  <View>
                    <FAB
                      style={{backgroundColor: this.state.teamAccents[1], margin: 15}}
                      large
                      icon="plus"
                      color={this.state.teamHighlights[1]}
                      onPress={() => this.handleIncrement(1)}
                    />
                  </View>  

                </View>
       
              </View>

            </View>

            <View style={{backgroundColor: this.state.teamHighlights[2], flexDirection: "column", flex: 1}}>
            <View style={{flex:.5}}></View>

              <View style={{flex:2,}}>
                <View style={{ flex:1,flexDirection:'row',  }}>

                  <View>
                    <FAB
                        style={{backgroundColor: this.state.teamAccents[2], margin: 15}}
                        large
                        icon="minus"
                        color={this.state.teamHighlights[2]}
                        onPress={() => this.handleDecrement(2)}
                      />
                  </View>

                  <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: "Digital-7", fontSize: 160, color: this.state.teamColors[2]}} >
                      {this.state.player3}
                    </Text>  
                  </View>

                  <View>
                    <FAB
                      style={{backgroundColor: this.state.teamAccents[2], margin: 15}}
                      large
                      icon="plus"
                      color={this.state.teamHighlights[2]}
                      onPress={() => this.handleIncrement(2)}
                    />
                  </View>  

                </View>
       
              </View>

            </View>
        </View>
      );
    }else if (global.Settings.getNumTeams() == 4){
      return (
        <View style={{flex: 1}}>

          <View style={{flexDirection: 'row', flex:1}}>
            <View style={{flex: 1, backgroundColor: this.state.teamHighlights[0]}}>

              <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontFamily: "Digital-7", fontSize: 180, color: this.state.teamColors[0]}} >
                    {this.state.player1}
                </Text>   

                <View style={{ flexDirection:'row',  justifyContent: 'space-between',}}>
                  <FAB
                      style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                      large
                      icon="minus"
                      color={this.state.teamHighlights[0]}
                      onPress={() => this.handleDecrement(0)}
                    />

                  <FAB
                    style={{backgroundColor: this.state.teamAccents[0], margin: 15}}
                    large
                    icon="plus"
                    color={this.state.teamHighlights[0]}
                    onPress={() => this.handleIncrement(0)}
                  />
                </View>
              </View>

            </View>
            <View style={{flex: 1, backgroundColor: this.state.teamHighlights[1]}}>
              <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{ fontFamily: "Digital-7", fontSize: 180, color: this.state.teamColors[1]}} >
                      {this.state.player2}
                  </Text>   

                  <View style={{ flexDirection:'row',  justifyContent: 'space-between',}}>
                    <FAB
                        style={{backgroundColor: this.state.teamAccents[1], margin: 15}}
                        large
                        icon="minus"
                        color={this.state.teamHighlights[1]}
                        onPress={() => this.handleDecrement(1)}
                      />

                    <FAB
                      style={{backgroundColor: this.state.teamAccents[1], margin: 15}}
                      large
                      icon="plus"
                      color={this.state.teamHighlights[1]}
                      onPress={() => this.handleIncrement(1)}
                    />
                  </View>
                </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', flex:1}}>
            <View style={{flex: 1, backgroundColor: this.state.teamHighlights[2]}}>
            <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontFamily: "Digital-7", fontSize: 180, color: this.state.teamColors[2]}} >
                    {this.state.player3}
                </Text>   

                <View style={{ flexDirection:'row',  justifyContent: 'space-between',}}>
                  <FAB
                      style={{backgroundColor: this.state.teamAccents[2], margin: 15}}
                      large
                      icon="minus"
                      color={this.state.teamHighlights[2]}
                      onPress={() => this.handleDecrement(2)}
                    />

                  <FAB
                    style={{backgroundColor: this.state.teamAccents[2], margin: 15}}
                    large
                    icon="plus"
                    color={this.state.teamHighlights[2]}
                    onPress={() => this.handleIncrement(2)}
                  />
                </View>
              </View>
            </View>
            <View style={{flex: 1, backgroundColor: this.state.teamHighlights[3]}}>
            <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontFamily: "Digital-7", fontSize: 180, color: this.state.teamColors[3]}} >
                    {this.state.player4}
                </Text>   

                <View style={{ flexDirection:'row',  justifyContent: 'space-between',}}>
                  <FAB
                      style={{backgroundColor: this.state.teamAccents[3], margin: 15}}
                      large
                      icon="minus"
                      color={this.state.teamHighlights[3]}
                      onPress={() => this.handleDecrement(3)}
                    />

                  <FAB
                    style={{backgroundColor: this.state.teamAccents[3], margin: 15}}
                    large
                    icon="plus"
                    color={this.state.teamHighlights[3]}
                    onPress={() => this.handleIncrement(3)}
                  />
                </View>
              </View>
            </View>
          </View>

        </View>
      );
    }
  }
    render() {
        return (
          <View style={{flex:1}}>
            {this.displayScoreboard()}

            <Footerx navigation={this.props.navigation}/>
          </View>
        );
      }
}