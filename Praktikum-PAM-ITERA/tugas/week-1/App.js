import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, View, Image, ImageBackground, TextInput, Button, Alert } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.separator}></View>
  );
}

export default function App() {
  return (
    <ScrollView style={{marginBottom:24}}>
      <ImageBackground
          source={{uri:'https://miro.medium.com/max/1000/1*kjouN-zV6BgpmCl5SnEjGQ.jpeg'}}
          style={{height:204, alignItems:'center', justifyContent:'center', padding: 24}}
        >
        <StatusBar animated backgroundColor='#020202' />
        <Text style={styles.title} >Introduction to Reccomender System</Text>
        <Text style={styles.subtitle} >Overview of some major reccomendation algorithms</Text>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.heading2} >Introduction</Text>
        <Text>
        During the last few decades, with the rise of Youtube, Amazon, Netflix and many other such web services, recommender systems have taken more and more place in our lives. From e-commerce (suggest to buyers articles that could interest them) to online advertisement (suggest to users the right contents, matching their preferences), recommender systems are today unavoidable in our daily online journeys.
        In a very general way, recommender systems are algorithms aimed at suggesting relevant items to users (items being movies to watch, text to read, products to buy or anything else depending on industries).
        Recommender systems are really critical in some industries as they can generate a huge amount of income when they are efficient or also be a way to stand out significantly from competitors. As a proof of the importance of recommender systems, we can mention that, a few years ago, Netflix organised a challenges (the “Netflix prize”) where the goal was to produce a recommender system that performs better than its own algorithm with a prize of 1 million dollars to win.
        In this article, we will go through different paradigms of recommender systems. For each of them, we will present how they work, describe their theoretical basis and discuss their strengths and weaknesses.
        </Text>
        <Separator/>
        <Text style={styles.heading2} >Collaborative Filtering</Text>
        <Text>
        Collaborative methods for recommender systems are methods that are based solely on the past interactions recorded between users and items in order to produce new recommendations. These interactions are stored in the so-called “user-item interactions matrix”.
        </Text>
        <Image 
          source={{uri:'https://miro.medium.com/max/1000/1*m_Z6Da5FZ62KN2yH-x_GOQ@2x.png'}}
          style={styles.img}
        />
        <Separator/>
        <Text>
        Then, the main idea that rules collaborative methods is that these past user-item interactions are sufficient to detect similar users and/or similar items and make predictions based on these estimated proximities.{'\n'}
        The class of collaborative filtering algorithms is divided into two sub-categories that are generally called memory based and model based approaches. Memory based approaches directly works with values of recorded interactions, assuming no model, and are essentially based on nearest neighbours search (for example, find the closest users from a user of interest and suggest the most popular items among these neighbours). Model based approaches assume an underlying “generative” model that explains the user-item interactions and try to discover it in order to make new predictions.
        </Text>
        <Image
          source={{uri:'https://miro.medium.com/max/1000/1*yV3-_A1q37WheNJCvzutqg@2x.png'}}
          style={styles.img}
        />
        <Text>
        The main advantage of collaborative approaches is that they require no information about users or items and, so, they can be used in many situations. Moreover, the more users interact with items the more new recommendations become accurate: for a fixed set of users and items, new interactions recorded over time bring new information and make the system more and more effective.
        However, as it only consider past interactions to make recommendations, collaborative filtering suffer from the “cold start problem”: it is impossible to recommend anything to new users or to recommend a new item to any users and many users or items have too few interactions to be efficiently handled. This drawback can be addressed in different way: recommending random items to new users or new items to random users (random strategy), recommending popular items to new users or new items to most active users (maximum expectation strategy), recommending a set of various items to new users or a new item to a set of various users (exploratory strategy) or, finally, using a non collaborative method for the early life of the user or the item.
        </Text>
        <Separator/>
      </View>
      <View style={{justifyContent:'space-around', marginVertical: 12, flexDirection:'row'}}>
        <TextInput placeholder='komentar' style={styles.textinput}/>
        <Button 
          title='Komentar'
          color='#000080'
          onPress={() => Alert.alert('Komentar ditambahkan')}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button 
          title='Like'
          color='#FF69C1'
          onPress={() => Alert.alert('Artikel disukai') }
        />
        <Button 
          title='Save'
          color='#ffc0cb'
          onPress={() => Alert.alert('Artikel disimpan') }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 24,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#f2f2f2'
  },
  heading2: {
    fontSize:16,
    fontWeight: 'bold',
    marginBottom: 24
  },
  separator: {
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#02022f',
    marginHorizontal: 24
  },
  img: {
    alignSelf: 'center',
    height: 175,
    width: 250
  },
  textinput: {
    height: 30,
    width: 200,
    borderColor: '#000',
    borderBottomWidth: 2
  },
  buttonRow: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
