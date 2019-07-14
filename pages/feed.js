import React from 'react'
import { ApiContext } from "../components/context"
import GetFeedData from "../components/GetFeedData"
import './feedCss.sass'

const Feed = (props) => {
    return (
        <ApiContext.Consumer>
            {(value) => { value
                console.log('teste')
                const token = value.state.response.user.token
                
                //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZ…yNDV9.3ii4R9MDsPzAIFc3X7cHE4D49azpz9cDT3j4aJzUl6A'
                return <GetFeedData value={token}/>
            }}
        </ApiContext.Consumer>
    )
}

export default Feed