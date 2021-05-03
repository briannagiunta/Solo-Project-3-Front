import axios from "axios";
import {useContext, useEffect, useState } from "react";
import {UserContext} from '../context/userContext'

const User = (props) => {
    const {fetchFriends, fetchPending, fetchFriendRequests } = useContext(UserContext)
    const [view, setView] = useState('')

    useEffect(()=>{setView(props.view)})


    const sendRequest = async () =>{
        const userId = localStorage.getItem('userId')
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/friendships/send/request`,{
            userId2: props.id
        },{
            headers:{
                Authorization: userId
            }
        })
        console.log(res)
        if(res.data.message === 'request sent'){
            fetchPending()
        }
    }

    const acceptRequest = async () =>{
        const userId = localStorage.getItem('userId')
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/friendships/accept`,{
            userId2: props.id
        },{
            headers:{
                Authorization: userId
            }
        })
        console.log(res)
        if(res.data.message === 'accepted'){
            fetchFriendRequests()
        }
    }


    return(
        <div className = 'user'>
            <div className = 'connect-pic'>

            </div>
            <div className = 'text-container'>
                <div className= 'user-text'>
                    <p><span className = 'bold'> Hi! Im {props.name}</span><br/>
                    Im here {props.hereFor} </p> 
                </div>

                {view === 'connect' && 
                    <div className='userButtons'>
                        <button>Message</button>
                        <button onClick = {()=>{sendRequest()}}>Add</button>
                    </div>
                }
                {view === 'friend' && 
                    <div className='userButtons'>
                        <button>Message</button>
                        <button>Delete</button>
                    </div>
                }
                {view === 'pending' && 
                    <div className='userButtons'>
                        <button>Message</button>
                        <button className = 'pending'>Pending</button>
                    </div>
                }
                {view === 'request' && 
                    <div className='userButtons'>
                        <button>Message</button>
                        <button onClick={()=>{acceptRequest()}}>Accept</button>
                        <button>Reject</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default User