import React, {useState} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

function App(){
  const [count, setCount] = useState(0)
  return (
    <View style={{justifyContent:'center', alignItems:'center', marginTop:200}}>
      <Text>Hitung aku {count}</Text>
      <Button title='hitung' onPress={() => setCount(count+1)} />
    </View>
  )
}

export default App