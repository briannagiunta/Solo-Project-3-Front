import {useContext, useEffect} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'
import LinkButton from '../components/linkButton'

const MyEvents = (props) =>{
    const {userState, postState, shouldRedirectState} = useContext(UserContext)
    const [user,setUser] = userState
    const [shouldRedirect, setShouldRedirect] = shouldRedirectState

    useEffect(()=>{setShouldRedirect('false')})
    return(
        <div className = 'page-container'>
            <UserContainer />

            <div className = 'content-container'>
                <h1>My Events</h1>
                <LinkButton path= './addnew' text = 'Add New Event' class= 'add-new' setAddFormState = {props.setAddFormState} />

                

            </div>

        </div>
    )
}

export default MyEvents