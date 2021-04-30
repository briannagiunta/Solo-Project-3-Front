import {useContext} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'

const MyEvents = (props) =>{
    const {userState, postState} = useContext(UserContext)
    const [user,setUser] = userState


    return(
        <div className = 'page-container'>
            <UserContainer />

            <div className = 'content-container'>
                <h1>My Events</h1>
                

            </div>

        </div>
    )
}

export default MyEvents