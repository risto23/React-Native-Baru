import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PahlawanActivity from './components/PahlawanActivity';
import Home from './components/Home';

import IdentitasActivity from './components/IdentitasActivity';
import HasilActivity from './components/HasilActivity';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#e1e5eb',
    marginBottom: 5,
  },
  gambar: {
    width: 400,
    height: 400 
  },
});

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, {backgroundColor: '#0f8d08'}];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={viewStyles}>
        <Image
          style={styles.gambar}
          source={require('./img/whatsapp_PNG20.png')}
        />
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({isLoading: false});
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
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


