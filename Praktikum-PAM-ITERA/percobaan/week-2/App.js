import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InputButton from './inputbutton';

const buttons = [
  ['Clear', 'Del'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+']
]

export default class App extends Component{
  constructor(){
    super();
    this.initialState = {
      displayValue: '0',
      operator: null,
      firstValue: '',
      secondValue: '',
      nextValue: false
    }
    this.state = this.initialState;
  }
  renderButtons(){
    let layout = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputButton
          value = {buttonItems}
          handleOnPress = {this.handleInput.bind(this, buttonItems)}
          key = {'button-buttonIndex'}
        />
      });
      return <View style={styles.inputRow} key={'row-'+index} >{rowItem}</View>
    });
    return layout;
  }
  handleInput = (input) => {
    const {displayValue, operator, firstValue, secondValue, nextValue} = this.state;
    switch(input){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: (displayValue === '0') ? input : displayValue + input
        })
        if (!nextValue){
          this.setState({
            firstValue: firstValue + input
          })
        }else{
          this.setState({
            secondValue: secondValue + input
          })
        }
        break;

      case '+':
      case '-':
      case 'x':
      case '/':
        this.setState({
          nextValue: true,
          operator: input,
          displayValue: (operator !== null ? 
            displayValue.substr(0, displayValue.length - 1) : displayValue) + input
        })
        break;
        
      case '.':
        let dot = displayValue.slice(-i)
        this.setState({
          displayValue: (dot !== '.' ? displayValue + input : displayValue)
        })
        if(!nextValue){
          this.setState({
            firstValue: firstValue + input
          })
        }else{
          this.setState({
            secondValue: secondValue + input
          })
        }
        break;

      case '=':
        let formatOperator = (operator == 'x') ? '*' : (operator == '/') ? '/' : operator
        let result = eval(firstValue + formatOperator + secondValue)
        this.setState({
          displayValue: result,
          firstValue: result,
          secondValue: '',
          operator: null,
          nextValue: false
        })
        break;
            
      case 'Clear':
        this.setState(this.initialState);
        break;
              
      case 'Del':
        let string = displayValue.toString()
        let deleteString = string.substr(0, string.length - 1)
        let length = string.length;
        this.setState({
          displayValue: length == 1 ? '0' : deleteString
        })
        break;
    }
  }
  render(){
    return (
      <View
      style={styles.container}>
        <View
        style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {this.state.displayValue}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {this.renderButtons()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#5f9ea0'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#008b8b'
  },
  resultText: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'right'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
})