import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PhotoComponent from './PhotoComponent.js'

import ImagePicker from "react-native-image-picker";
const styles = StyleSheet.create({
container: {
flex: 1
}
})
class Main extends Component {
    
constructor(props) {
super(props)
this.state = {
uploadSource: null
}
}
selectPhotoTapped() {
const options = {
quality: 1.0,
maxWidth: 200,
maxHeight: 200,
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

class CameraMainActivity extends Component {
  render() {
    <View style={styles.container}>

  }
}
export default CameraMainActivity;
