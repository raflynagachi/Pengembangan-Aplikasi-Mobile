import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/components/reducers';
import Timer from './src/components/timer';

const store = createStore(reducer);

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
