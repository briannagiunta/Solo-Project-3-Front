import {useContext, useEffect} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'
import LinkButton from '../components/linkButton'

const MyJobs = (props) =>{
    const {userState, postState, shouldRedirectState} = useContext(UserContext)
    const [user,setUser] = userState
    const [shouldRedirect, setShouldRedirect] = shouldRedirectState

    useEffect(()=>{setShouldRedirect('false')})
    return(
        <div className = 'page-container'>
            <UserContainer />

            <div className = 'content-container'>
                <h1>My Job Listings</h1>
                <LinkButton path= './addnew' text = 'Add New Job Listing' class= 'add-new' setAddFormState = {props.setAddFormState} />
                

            </div>

        </div>
    )
}

export default MyJobs