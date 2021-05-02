import {useContext, useState, useEffect} from 'react'
import {UserContext} from '../context/userContext'
import UserContainer from '../components/userContainer'
import axios from 'axios'
import TopForm from '../components/topForm'
import MidForm from '../components/midForm'
import EndForm from '../components/endForm'

const AddNewPage = (props) =>{
    const {userState, postState, shouldRedirectState, redirectState} = useContext(UserContext)
    const [user,setUser] = userState
    const [shouldRedirect, setShouldRedirect] = shouldRedirectState
    const [redirectTo, setRedirectTo] = redirectState
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Type, setType] = useState('')
    const [Date, setDate] = useState('')
    const [Start, setStart] = useState('')
    const [End, setEnd] = useState('')
    const [Address, setAddress] = useState('')
    const [Zipcode, setZipcode] = useState('')
    // const [City, setCity] = useState('')
    // const [State, setState] = useState('')
    // const [Added, setAdded] = useState('')
    
    
    
    useEffect(()=>{setShouldRedirect('false')},[])
    // useEffect(()=>{setAdded('')},[])
    
    // const handleZip = async () => {
    //     const res = await axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${Zipcode}?key=${process.env.REACT_APP_ZIPKEY}`)
    //     console.log(res);
    //     setCity(res.data.City)
    //     setState(res.data.State) 
    //     if(props.addFormState === 'Add New Job Listing'){
    //         setAdded('job')
    //     }else if(props.addFormState === 'Add New Event'){
    //         setAdded('event')
    //     }
        
    // }

    const addPost = async () => {
        const userId = localStorage.getItem('userId')
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts/create`, {
            Title, Description
        },
        {
            headers: {
                Authorization: userId
            }
        })
        console.log(res);
        setRedirectTo('/myposts')
        if(res.data.message === "post added"){
            setShouldRedirect('true')
        }
    }
    
    const addJob = async () => {
        const userId = localStorage.getItem('userId')
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/jobs/create`, {
            Title, Description, Type, Zipcode
        },
        {
            headers: {
                Authorization: userId
            }
        })
        console.log(res);
        setRedirectTo('/myjobs')
        if(res.data.message === "Job added"){
            setShouldRedirect('true')
        }
    }

    const addEvent = async () => {
        const userId = localStorage.getItem('userId')
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/events/create`, {
            Title, Description, Type, Zipcode, Date, Start, End, Address
        },
        {
            headers: {
                Authorization: userId
            }
        })
        console.log(res);
        setRedirectTo('/myevents')
        if(res.data.message === "Event added"){
            setShouldRedirect('true')
        }
    }
        

    // if(Added === 'job'){
    //     addJob()
    // }else if(Added === 'event'){
    //     addEvent()
    // }

    
    return(
        <div className = 'page-container'>
            <UserContainer />

            <div className = 'content-container'>
                <h1>{props.addFormState}</h1>

                {props.addFormState === 'Add New Post' &&
                    <div>
                        <TopForm setTitle = {setTitle} setDescription = {setDescription}/>
                        <button onClick={() => {addPost()}}>Add Post</button>
                    </div>
                }

                {props.addFormState === 'Add New Job Listing' &&
                    <div>
                        <TopForm setTitle = {setTitle} setDescription = {setDescription}/>
                        <MidForm setType = {setType} setZipcode = {setZipcode} />
                        <button onClick={() => {addJob()}}>Add Job Listing</button>
                    </div> 
                }

                {props.addFormState === 'Add New Event' &&
                    <div>
                        <TopForm setTitle = {setTitle} setDescription = {setDescription}/>
                        <MidForm setType = {setType} setZipcode = {setZipcode} />
                        <EndForm setDate = {setDate} setStart = {setStart} setEnd = {setEnd} setAddress = {setAddress} />
                        <button onClick={() => {addEvent()}}>Add Event</button>
                    </div> 
                }
            </div>

        </div>
    )
}

export default AddNewPage