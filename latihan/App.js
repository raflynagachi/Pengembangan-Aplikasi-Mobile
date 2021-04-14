import React from 'react';
import { View, ScrollView } from 'react-native';
import SimpleComponent from './src/SimpleComponent';
import StylingComponent from './src/StylingComponent';
import FlexBox from './src/FlexBox';

const App = () => (
  <View>
    <ScrollView>
      {/* <StylingComponent />
      <SimpleComponent /> */}
      <FlexBox />
    </ScrollView>
  </View>
);

export default App;
