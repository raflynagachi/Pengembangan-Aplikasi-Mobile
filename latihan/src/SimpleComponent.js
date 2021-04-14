import { Text, Image, TextInput, View } from 'react-native';
import React, { Component } from 'react';
import favicon from './assets/favicon.png';

const SimpleComponent = () => (
  <View>
    <Text>Hello Nagachi</Text>
    <Gambar />
    <Text>Hello lagi gaes</Text>
    <Gambar /> <BoxGreen />
    <TextInput style={{ borderWidth: 1 }} />
  </View>
);

const Gambar = () => (
  <Image
    source={favicon}
    style={{
      width: 80,
      height: 80,
    }}
  />
);

class BoxGreen extends Component {
  render() {
    return <Text>Ini class component BoxGreen</Text>;
  }
}

export default SimpleComponent;
