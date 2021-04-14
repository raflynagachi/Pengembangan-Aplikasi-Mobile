import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

const StylingComponent = () => (
  <View>
    <Text style={styles.text}> Styling Component</Text>
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#0abde3',
        borderWidth: 2,
        borderColor: '#5f27cd',
        marginTop: 20,
        marginLeft: 20,
      }}
    />
    <View
      style={{
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8,
      }}
    >
      <Image
        source={{
          uri:
            'https://cdn.idntimes.com/content-images/post/20190318/490733-lenovo-ideapad-720s-e5dc87018cb5f319bed2e86b0bcbdffc.jpg',
        }}
        style={{ width: 100, height: 100, borderRadius: 8, alignSelf: 'center' }}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 12,
        }}
      >
        Laptop LENOVO L340
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#f2994a',
          margin: 12,
        }}
      >
        Rp 17.500.000,-
      </Text>
      <View
        style={{
          backgroundColor: '#0abde3',
          borderRadius: 8,
          padding: 8,
          margin: 20,
        }}
      >
        <Text style={{ fontWeight: '600', textAlign: 'center', color: 'white' }}>BELI</Text>
      </View>
    </View>
  </View>
);

export default StylingComponent;
