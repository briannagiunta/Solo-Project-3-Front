import {useContext} from 'react'
import {UserContext} from '../context/userContext'
import {Link} from 'react-router-dom'
import LinkButton from '../components/linkButton'

const UserContainer = () =>{
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState


    return(
        <div className = 'user-container'>
            <div className = 'big-pic'>

            </div>
            <div className = 'user-info'>
                <h4> {user.name} </h4>
                <div> Im Here {user.hereFor} </div>
            </div>
            <div className = 'user-nav'>
                <LinkButton path='/mycommunity' text= 'My Community' class = 'user-link' />
                <LinkButton path='/mycalendar' text= 'Saved Jobs/Events' class = 'user-link' />
                <LinkButton path='/myposts' text= 'My Posts' class = 'user-link' />
                <LinkButton path='/myevents' text= 'My Events' class = 'user-link' />
                <LinkButton path='/myjobs' text= 'My Job Listings' class = 'user-link' />
            </div>
        </div>
    )
}

export default UserContainer