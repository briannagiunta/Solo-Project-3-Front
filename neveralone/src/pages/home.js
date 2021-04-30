import {useContext} from 'react'
import {UserContext} from '../context/userContext'

const Home = (props) =>{
    const {userState, postState} = useContext(UserContext)
    const [user,setUser] = userState


    return(
        <div>
            Home page
        </div>
    )
}

export default Home