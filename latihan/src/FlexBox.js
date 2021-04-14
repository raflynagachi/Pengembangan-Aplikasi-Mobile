import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />
          <View style={{ backgroundColor: 'yellow', width: 50, height: 50 }} />
          <View style={{ backgroundColor: 'green', width: 50, height: 50 }} />
          <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 12,
          }}
        >
          <Image
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C5603AQF1sHJ3mcqxmw/profile-displayphoto-shrink_200_200/0/1541811221512?e=1618444800&v=beta&t=RyNw_gr4KZL327Xln9YFPgavI4KfJVkNFT6JvEhG8t8',
            }}
            style={{ width: 100, height: 100, marginRight: 12, borderRadius: 50 }}
          />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rafly Rigan Nagachi</Text>
            <Text style={{ color: 'grey' }}>Teknik Informatika</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
