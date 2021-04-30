import {useState, createContext } from 'react'
import axios from 'axios'


const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [redirectTo, setRedirectTo] = useState('')
    const [allPosts, setAllPosts] = useState([])


    const fetchUser = async () => {
        let userId = localStorage.getItem('userId') 
        if(userId){
            const res = await axios.get(`http://localhost:3001/users/verify`,{
                headers: {
                    Authorization: userId
                }
            })
            setUser(res.data.user)
        }
    }
    
    const fetchPosts = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/all`)
        setAllPosts(res.data.allPosts)
    }


    const state = {
        userState: [user,setUser],
        redirectState: [redirectTo,setRedirectTo],
        postState: [allPosts, setAllPosts],
        fetchUser: fetchUser,
        fetchPosts: fetchPosts,
        
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}