import {useContext} from 'react'
import {UserContext} from '../context/userContext'
import {Link} from 'react-router-dom'

const UserContainer = () =>{
    const {userState, postState} = useContext(UserContext)
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

                <div className = 'user-link'>
                    <Link to= '/mycommunity'>My Community</Link>
                </div>

                <div className = 'user-link'>
                    <Link to= '/mycalendar'>My Calendar</Link>
                </div>

                <div className = 'user-link'>
                    <Link to= '/myposts'>My Posts</Link>
                </div>
              
                <div className = 'user-link'>
                    <Link to= '/myevents'>My Events</Link>
                </div>

                <div className = 'user-link'>
                <Link to= '/myjobs'>My Job Listings</Link>
                </div>


            </div>


        </div>
    )
}

export default UserContainer