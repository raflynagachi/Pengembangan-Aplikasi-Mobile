import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.initialState = {
      name: '',
      age: ''
    }
    this.state = this.initialState;
  }
  onButtonPress = () => {
    this.setState({
      name: this.state.nama,
      age: this.state.umur
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text>Nama: {this.state.name}</Text>
          <Text>Umur: {this.state.age}</Text>
        </View>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.onButtonPress}
        >
          <Text style={styles.text} >Klik untuk mengubah informasi</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <Text>Nama baru</Text>
          <TextInput 
            style={styles.textinput} 
            placeholder='Nama'
            onChangeText={(nama) => this.setState({nama})} />
        </View>
        <View style={styles.form}>
          <Text>Umur baru</Text>
          <TextInput 
            style={styles.textinput} 
            placeholder='Umur'
            onChangeText={(umur) => this.setState({umur})}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12
  },
  form: {
    flexDirection: 'row',
    margin: 4
  },
  textinput: {
    borderWidth: 2,
    marginLeft: 8
  },
  button: {
    margin: 1,
    backgroundColor: '#368fad',
    justifyContent: 'center',
    padding: 12,
    alignSelf: 'flex-start',
    borderRadius: 8,
    margin: 12
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})