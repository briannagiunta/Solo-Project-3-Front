import {useContext, useEffect} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'
import User from '../components/user'

const Connect = (props) =>{
    const {userState, allUsersState, fetchAllUsers} = useContext(UserContext)
    const [user,setUser] = userState
    const [allUsers, setAllUsers] = allUsersState


    useEffect(()=>{fetchAllUsers()},[])

    
    return(
        <div className = 'page-container'>
            <UserContainer />

            <div className = 'content-container'>
                <h1>Connect</h1>
                <div className = 'connect-container'>
                    {allUsers.map(user=>
                        <User key = {user.id} name = {user.name} hereFor = {user.hereFor} />
                    )}
                </div> 
                

            </div>

        </div>
    )
}

export default Connect