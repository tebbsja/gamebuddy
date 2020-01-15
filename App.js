/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import DiceScreen from './Screens/DiceScreen';
import CardsScreen from './Screens/CardsScreen';
import ScoreboardScreen from './Screens/ScoreboardScreen';
import TimerScreen from './Screens/TimerScreen';
import SettingsScreen from './Screens/SettingsScreen';
import StandardDeckScreen from './Screens/StandardDeckScreen';
import MonopolyDeckScreen from './Screens/MonopolyDeckScreen';
import ScattergoriesDeckScreen from './Screens/ScattergoriesDeckScreen';
import MadGabScreen from './Screens/MadGabScreen';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Dice: {screen: DiceScreen},
  Cards: {screen: CardsScreen},
  Scoreboard: {screen: ScoreboardScreen},
  Timer: {screen: TimerScreen},
  Settings: {screen: SettingsScreen},
  StandardDeck: {screen: StandardDeckScreen},
  MonopolyDeck: {screen: MonopolyDeckScreen},
  ScattergoriesDeck: {screen: ScattergoriesDeckScreen},
  MadGab: {screen: MadGabScreen},
});

console.disableYellowBox = true;

const App = createAppContainer(MainNavigator);

export default App;

