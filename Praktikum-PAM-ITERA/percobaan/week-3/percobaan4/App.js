import React, {useState, useCallback, useMemo, memo} from 'react'
import './App.css'
import Layout from './Layout'

function App() {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({name:'fulan'})
    const likeAction = () => setCount(current => current + 1)
    const heavyProcess = (u) => {
        return u;
    }
    const memoizedlikeAction = useCallback(likeAction, [])
    const userProp = useMemo(() => heavyProcess(user), [user])

    console.log('Parent component rendered')
    return (
        <Layout>
            <p>
                <i>-- Parent Component --</i>
            </p>
            <button onClick={likeAction}> Like {count}</button>
            <MemoizedChildComponent 
                title='Hello'
                user={userProp}
                action={memoizedlikeAction}
            />
        </Layout>
    )
}

function ChildComponent({ title, user, action}){
    console.log('Child compoenent rendered')
    return (
        <>
        <p>
            <br/>
            <i>-- Child Component --</i>
        </p>
        <h1>
            {" "}
            {title}, {user.name}{" "}
        </h1>
        <button onClick={action}>Like</button>
        </>
    )
}

function compare(prevProps, nextProps){
    return JSON.stringify(prevProps) === JSON.stringify(ChildComponent)
}

const MemoizedChildComponent = React.memo(ChildComponent)

function sleep(milliseconds){
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    }while(currentDate - date < milliseconds)
}

export default App
