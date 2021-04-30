import {useContext} from 'react'
import {UserContext} from '../context/userContext'
import { Link } from 'react-router-dom';

const NavBar = (props) =>{
    const {userState, postState} = useContext(UserContext)
    const [user,setUser] = userState

    return(
        <nav>
            {!user.name ?
                <div>
                    <Link to= '/'>Home</Link>{"  |  "}
                    <span onClick={()=>{props.setLogOrSignState('signup')}}>
                        <Link to= '/log-sign'>Sign Up</Link>{"  |  "}
                    </span>

                    <span onClick={()=>{props.setLogOrSignState('login')}}>
                        <Link to='/log-sign'>Login</Link>
                    </span>
                </div>
            :   
                <div>
                    <Link to='/community'>Community</Link>{"  |  "}
                    <Link to='/connect'>Connect</Link>{"  |  "}
                    <Link to='/resources'>Resources</Link>{"  |  "}
                    <Link to='/events'>Events</Link>{"  |  "}
                    <Link to='/jobs'>Job Listings</Link>{"  |  "}
                    <span onClick={()=>{
                        setUser({})
                        localStorage.removeItem('userId')
                    }}><Link to='/'>Logout</Link></span>
                </div>


            }
        </nav>
       
    )
}

export default NavBar