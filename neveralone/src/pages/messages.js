import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'
import axios from 'axios'

const Messages = (props) =>{
    const {userState, postState} = useContext(UserContext)
    const [user,setUser] = userState
    const [userConvos,setUserConvos] = useState([])
    const [messages, setMessages] = useState([])

    const getConvos = async () => {
        const userId = localStorage.getItem('userId')
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/convos/getconvos`,{
            headers:{
                Authorization: userId
            }
        })
        setUserConvos(res.data.convos)
    }

    useEffect(()=>{getConvos()},[])

    const viewMessages = async (e) => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/convos/messages`,{
            id: e.target.value
        })
        console.log(res);
        setMessages(res.data.messages)
    }
    
    return(
        <div className = 'page-container'>
            <UserContainer />

            <div className = 'content-container'>
                <h1>Messages</h1>
                <div className = 'message-page'>
                    <div className = "message-list">
                        {userConvos.map(convo=>
                            <button onClick={(e)=>{viewMessages(e)}} key = {convo.id} value = {convo.id} >
                                {convo.usernames}
                            </button>
                        )}

                    </div>
                    <div className = "current-message">
                        {messages.map(mes=>
                            <div>
                                {`${mes.user.name}: ${mes.content}`}
                            </div>
                        )}

                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Messages