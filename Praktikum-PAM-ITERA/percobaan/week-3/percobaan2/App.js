import React, {useState} from 'react'
import { Button } from 'react-native'
import './App.css'
import Layout from './Layout'
//import MyClass from './MyClass'
//import MyFunc from './MyFunc'
//import NewsFeed from './NewsFeed'

function App(){
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => setToggle(currentState => !currentState)
    return (
        <Layout>
            <Button onPress={() => {handleToggle}} title='Toggle'/>
        </Layout>
    )
}

export default App