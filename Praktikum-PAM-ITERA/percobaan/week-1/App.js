import React from 'react';
import { StyleSheet, Button, Alert, View, StatusBar, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor='yellow'
      barStyle='light-content' />
      <TextInput placeholder='Nama' style={styles.textInput} />
      <Button title='Button' onPress={() => Alert.alert('Button Sederhana')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    margin: 40
  },
  textInput: {
    height: 40,
    borderColor: '#000',
    borderBottomWidth: 3,
    marginBottom: 36,
    marginTop: 60
  }
})

export default App;