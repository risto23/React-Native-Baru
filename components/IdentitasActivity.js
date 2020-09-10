//import React from 'react';
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  namaPahlawan: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  asal: {
    fontSize: 18,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
    fontSize: 18
  },
  btn: {
    backgroundColor: '#0fa0d1',
    height: 50,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default class IdentitasActivity extends React.Component {
  //Menginisialisasi state nama dan asal.
  constructor(props) {
    super(props)

    this.state = {
      TextInput_nama: '',

      TextInput_asal: '',

      date: '2000-01-1',
      androidDate: `${new Date().getUTCDate()}/${
        new Date().getUTCMonth() + 1
      }/${new Date().getUTCFullYear()}`,
    };
  }

  //Get current Timestamp
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      tanggal:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  //Method mengirimkan data ke activity lain
  Kirim_data = () => {
    this.props.navigation.navigate('Hasil', {
      NamaOBJ: this.state.nama,
      AsalOBJ: this.state.asal,
      WaktuOBJ: this.state.tanggal,
      dateOBJ: this.state.date,
      kelaminOBJ: this.state.option,
    });
    this.setState({TextInput_nama: '', TextInput_asal: ''});
  };

  static navigationOptions = {
    title: 'Data',
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  tampilkan = () => {
    alert('Nama : ' + this.state.nama + '\n' + 'asal : ' + this.state.asal);
  };
  state = {
    one: false,
    two: false,
  };

  onepressed(option) {
    this.setState({one: true, two: false, option: option});
  }

  twopressed(option) {
    this.setState({one: false, two: true, option: option});
  }

  render() {
    return (
      <View style={{flex: 0.8}}>
        <TextInput
          style={styles.textInput}
          placeholder="Nama"
          onChangeText={(text) => {
            this.setState({nama: text});
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Asal"
          onChangeText={(text) => {
            this.setState({asal: text});
          }}
        />

        <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1990"
          maxDate="01-01-2100"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            this.setState({date: date});
          }}
        />

        <Text>Jenis Kelamin</Text>
        <CheckBox
          checked={this.state.one}
          onPress={() => this.onepressed('pria')}
          style={{marginRight: 20}}></CheckBox>
        <Text>Pria</Text>
        <CheckBox
          checked={this.state.two}
          onPress={() => this.twopressed('wanita')}
          style={{marginRight: 20}}></CheckBox>

        {/* Tombol untuk mengirimkan data ke activity lain. */}
        <TouchableOpacity
          onPress={this.Kirim_data}
          activeOpacity={0.7}
          style={styles.btn}>
          <Text style={styles.btnText}> Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
