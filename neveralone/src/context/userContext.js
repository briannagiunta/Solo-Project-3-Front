import {useState, createContext } from 'react'
import axios from 'axios'


const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState('')
    const [redirectTo, setRedirectTo] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [allEvents, setAllEvents] = useState([])
    const [allJobs, setAllJobs] = useState([])


    const fetchUser = async () => {
        let userId = localStorage.getItem('userId') 
        if(userId){
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`,{
                headers: {
                    Authorization: userId
                }
            })
            setUser(res.data.user)
        }
    }

    const fetchAllUsers = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/all`)
        setAllUsers(res.data.allUsers)
    }
    
    const fetchPosts = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/all`)
        setAllPosts(res.data.allPosts)
    }

    const fetchAllEvents = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events/all`)
        // console.log(res);
        setAllEvents(res.data.allEvents)
    }

    const fetchAllJobs = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs/all`)
        setAllJobs(res.data.allJobs)
    }


    const state = {
        userState: [user,setUser],
        shouldRedirectState: [shouldRedirect, setShouldRedirect],
        redirectState: [redirectTo,setRedirectTo],
        postState: [allPosts, setAllPosts],
        allUsersState: [allUsers,setAllUsers],
        allEventsState: [allEvents,setAllEvents],
        allJobsState: [allJobs, setAllJobs],
        fetchUser: fetchUser,
        fetchPosts: fetchPosts,
        fetchAllUsers: fetchAllUsers,
        fetchAllEvents: fetchAllEvents,
        fetchAllJobs: fetchAllJobs
        
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}