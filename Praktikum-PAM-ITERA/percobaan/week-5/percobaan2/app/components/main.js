import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Note from './note'
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            noteArray: [],
            noteText: ''
        }
    }
    render(){
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod = {() => this.deleteNote(key)}
            />
        })

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Daftar Kegiatan</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='Ketik disini...'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addTask.bind(this)} >
                    <Text style={styles.addButtonText} >Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
    addTask(){
        if(this.state.noteText){
            var date = new Date();
            this.state.noteArray.push({
                'date' : date.getFullYear() +
                '/' + (date.getMonth() + 1) +
                '/' + date.getDate(),
                'note': this.state.noteText
            })
            this.setState({noteArray: this.state.noteArray})
            this.setState({noteText: this.state.noteText})
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key, 1)
        this.setState({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header : {
        backgroundColor: '#C58F06',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: "#ddd",

    },
    headerText: {
        color: 'white',
        fontSize: 20,
        padding: 20,
        fontWeight:'200',

    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#000',
        padding: 10,
        backgroundColor: '#FBFBFB',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#c58F06',
        width: 50,
        height: 37,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 15,
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,

    },
})