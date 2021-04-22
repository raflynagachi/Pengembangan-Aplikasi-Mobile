import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity
}from 'react-native';
export default class Note extends React.Component {
    render(){
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteDate}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <TouchableOpacity onPress = {this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Del</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        backgroundColor: '#cccccc',
        marginVertical: 10,
    },
    noteText: {
        paddingLeft: 10,
        position: 'absolute',
        top: 15,
        bottom: 10,
        left: 150
    },
    noteDate: {
        paddingLeft: 10,
        position: 'absolute',
        top: 15,
        bottom: 10,
        left: 10
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3355',
        padding: 10,
        top: 0,
        bottom: 0,
        right: 0
    },
    noteDeleteText:{
        color: 'white',
    }
})