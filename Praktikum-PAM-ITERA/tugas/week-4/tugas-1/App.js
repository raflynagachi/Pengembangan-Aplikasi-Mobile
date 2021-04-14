import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import Gambar from './assets/itera.png'

const App = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Praktikum PAM</Text>
            </View>
            <View style={styles.body}>
                <Image 
                source={Gambar}
                style={styles.img}
                />
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Institut Teknologi</Text>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Sumatera</Text>
            </View>
            <View style={styles.footer}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>By: Rafly Rigan Nagachi</Text>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 660,
    }
    ,header: {
        flex: 3,
        backgroundColor: '#f0d314',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 10
    },
    body: {
        flex: 10,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#f0d314',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    img : {
        width : 250 ,
        height : 250,
        margin: 10
    }
})