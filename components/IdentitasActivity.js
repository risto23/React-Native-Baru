/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import React from 'react';
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {LookupModal} from 'react-native-lookup-modal';
import PhotoComponent from './PhotoComponent.js'
import ButtonComponent from './ButtonComponent'

import ImagePicker from "react-native-image-picker";

let users = [
  {
    id: 1,
    name: 'Kristen Protestan',
  },
  {
    id: 2,
    name: 'Katolik',
  },
  {
    id: 3,
    name: 'Hindu',
  },

  {
    id: 4,
    name: 'Buddha',
  },
];

const App = () => {
const [isSelected, setSelection] = useState(false);
}
//var tempCheckValues = [];

export default class IdentitasActivity extends React.Component {
  //Menginisialisasi state.
  constructor(props) {
    super(props)

    this.state = {
      TextInput_nama: '',

      TextInput_asal: '',

      date: '2000-01-1',
      androidDate: `${new Date().getUTCDate()}/${
        new Date().getUTCMonth() + 1
      }/${new Date().getUTCFullYear()}`,
      agama: ' ',
      uploadSource: null,
    };
  }

  selectPhotoTapped() {
    const options = {
    quality: 1.0,
    maxWidth: 50,
    maxHeight: 500,
    storageOptions: {
    skipBackup: true
    }
    };
    ImagePicker.showImagePicker(options, response => {
    console.log("Response = ", response);
    if (response.didCancel) {
    console.log("User cancelled photo picker");
    } else if (response.error) {
    console.log("ImagePicker Error: ", response.error);
    } else {
    let source = { uri: response.uri };
    this.setState({
    uploadSource: source
    });
    }
    });
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
      agamaOBJ : this.state.agama,
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
        
        <CheckBox
          value={this.isSelected}
          onValueChange={this.setSelection}
        />
         <Text style={styles.label}>Hobby</Text>
      <Text>Is CheckBox selected: {this.isSelected ? "👍" : "👎"}</Text>

        <Text>Agama</Text>
        <LookupModal style={styles.model}
          data={users}
          onSelect={(item) => {
            {
              this.setState({agama: item.name});
            }
          }}
          displayKey={'name'}
          selectText={this.state.agama}
        />
        
        <PhotoComponent />
<ButtonComponent onPress={this.selectPhotoTapped.bind(this)}/>


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  namaPahlawan: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    fontSize: 18,
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
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 50,
  },
  model :{
marginBottom:20
  },
  checkbox: {
    alignSelf: "center",
  },
});
