import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import {useSelector , useDispatch } from 'react-redux';
import {actionCreators as actions} from '../redux/action';

const itemCart = () => {
  const state = useSelector(state => state.stock)
  console.log(state)
  const dispatch = useDispatch()
  const price = 1000;
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8
      }}
    >
      <Image
        source={{
          uri:
            'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-3509419/chupa-chups_chupa-chups-stick-bon-bon-------------------------_full02.jpg',
        }}
        style={{width: 100, height: 100, borderRadius: 8, alignSelf: 'center' }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 12,
        }}
      >
        Permen Chupa Chups
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: '#f2994a',
          margin: 12,
        }}
      >
        Rp {price}
      </Text>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Button title={'Cancel'} onPress={() => dispatch(actions.cancelItem())}/>
        <Button title={'-'} onPress={() => dispatch(actions.decrItem())}/>
        <Button title={'+'} onPress={() => dispatch(actions.buyItem())}/>
      </View>
      <Text style={{marginTop:12}}>Jumlah beli: {state}</Text>
      <Text style={{marginTop:8}}>Total beli: {state*price}</Text>
    </View>
    );
}

export default itemCart;