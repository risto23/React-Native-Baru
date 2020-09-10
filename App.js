import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PahlawanActivity from './components/PahlawanActivity';
import Home from './components/Home';

import IdentitasActivity from './components/IdentitasActivity';
import HasilActivity from './components/HasilActivity';


export default class Navigator extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  Home: {screen: Home},
  Pahlawan: {screen: PahlawanActivity},
  Data: {screen: IdentitasActivity},
  Hasil: {screen: HasilActivity},
});

const AppContainer = createAppContainer(AppStackNavigator);


