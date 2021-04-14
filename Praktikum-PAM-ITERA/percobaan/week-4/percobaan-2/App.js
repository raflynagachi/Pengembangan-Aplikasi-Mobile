import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import AppHeader from './components/header'
import AppHome from './views/home'
import {Layout} from 'antd'

const {Header, Content, Footer} = Layout

export default function App(){
    return(
        <Layout className="mainLayout">
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <AppHome/>
            </Content>
        </Layout>
    )
}