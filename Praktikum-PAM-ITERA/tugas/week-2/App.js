import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.initialState = {
      name: '',
      age: '',
      newName: '',
      newAge: ''
    }
    this.state = this.initialState;
  }
  onButtonPress = () => {
    this.setState({
      name: this.state.newName,
      age: this.state.newAge
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Nama: </Text>
          <Text style={{fontWeight: 'bold'}}>{this.state.name}</Text>
        </View>
        <View style={styles.form}>
          <Text>Umur: </Text>
          <Text style={{fontWeight: 'bold'}}>{this.state.age}</Text>
        </View>
        
        <TextInput 
          style={styles.textinput} 
          placeholder='Nama'
          onChangeText={(newName) => this.setState({newName})} />
        <TextInput 
          style={styles.textinput} 
          placeholder='Umur'
          onChangeText={(newAge) => this.setState({newAge})}/>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.onButtonPress}
        >
          <Text style={styles.text} >Klik untuk mengubah informasi</Text>
        </TouchableOpacity>
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
    borderColor: '#368fad',
    marginVertical: 4,
    marginRight: 14,
    paddingLeft: 4
  },
  button: {
    margin: 1,
    backgroundColor: '#368fad',
    justifyContent: 'center',
    padding: 12,
    alignSelf: 'flex-end',
    borderRadius: 8,
    margin: 12
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})