import React , {useRef} from 'react'
import {TouchableOpacity , StyleSheet, Text, View , TextInput , Image } from 'react-native'
import Axios from 'axios'
import {useDispatch , useSelector } from 'react-redux'
import {Store} from '../redux/action'

const Tugas = () => {
    const Data = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const inputRef = useRef('')

    const handleInput = () => {
        Axios.get('http://www.omdbapi.com/?s=avenger&apikey=***YOUR_API_KEY***')
        .then(data => {
            dispatch(Store(data.data.Search))
        } )

    }
    
    const Item = ({Poster , Title , Year , Type }) =>{
        return(
            <View style={styles.item}>
                <Image source={Poster} style={styles.img} />
                <Text style={styles.itemtitle}>{Title}</Text>
                <Text style={styles.itemyear}>{Year}</Text>
                <Text style={styles.itemtype}>{Type}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movie Title</Text>
            <View style={styles.navbar}>
                <TextInput ref={inputRef} style={styles.search} placeholder="Search "/>
                <TouchableOpacity style={styles.submit} onPress={handleInput}>Search</TouchableOpacity>
            </View>
            <View style={styles.main}>
                {
                    Data.map(item => (
                        <Item Poster={item.Poster}
                              Title={item.Title}
                              Year={item.Year}
                              Type={item.Type}
                        />
                    ))
                }      
            </View>
        </View>
    )
}

export default Tugas

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 15 ,
    } ,

    main : {
        flexDirection : 'column' ,
        flexWrap : 'wrap' ,
        justifyContent : 'center' ,
      
    } ,
    content : {
        flex : 1
    } ,

    img : {
        width : 200 ,
        height : 200
    } ,

    search : {
        width : 200 ,
        padding : 10 ,
        borderWidth : 1 ,
        borderColor : 'rgb(0 , 0, 0)' ,
        
    } ,
    item : {
        marginBottom : 10
    } ,

    title : {
        fontSize : 24 ,
        fontWeight : '500' ,
        letterSpacing : 2 ,
        marginVertical : 8 ,
        
    } ,

    itemtitle : {
        fontSize : 18 ,
        fontWeight : '500' ,
        letterSpacing : 1 ,
        marginHorizontal : 8
    } ,

    navbar : {
        flexDirection:'row' ,
        marginBottom : 16
    } ,
    submit : {
        padding:12 ,
        backgroundColor : 'rgb(222,222,222)'
    }
})
