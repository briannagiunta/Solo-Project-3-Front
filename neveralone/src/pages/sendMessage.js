import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'
import axios from 'axios'

const SendMessage = (props) => {
    const [content, setContent] = useState('')

    const sendMes = async () =>{
        const userId = localStorage.getItem('userId')
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/convos/create`,{
            userId2: props.id,
            content: content
        },{
            headers:{
                Authorization: userId
            }
        })
        console.log(res);
    }
   

    return(
        <div className = 'page-container'>
        <UserContainer />

        <div className = 'content-container'>
            <h1>Messages </h1>
            <div className = 'send-container'>
                <h3>{`Start A Conversation with ${props.name} `}</h3>
                <div className = 'send-form'>
                <input id = 'content' type = 'text' onChange={(e)=>(setContent(e.target.value))} />
                <button onClick={()=>{sendMes()}}>Send</button>
                </div>

            </div>
            

        </div>

    </div>
    )
}

export default SendMessage