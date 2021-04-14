import React from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import ItemCart from './src/component/itemCart';
import Store from './src/redux/store'

const App = () => {
  return (
    <Provider store={Store}>
      <View 
      style={{
        marginTop: 16,
        alignItems: 'center'
      }}>
      <ItemCart />
    </View>
    </Provider>
  );
}

export default App;
