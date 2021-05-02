import axios from 'axios'
import LogSignForm from '../components/log-signForm'
import {UserContext} from '../context/userContext'
import {useContext,useEffect,useState} from 'react'

const LogOrSign = (props) =>{
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [HereFor, setHereFor] = useState('')
    const [Zipcode, setZipcode] = useState('')
    // const [City, setCity] = useState('')
    // const [State, setState] = useState('')
    // const [signUp, setSignUp] = useState(false)
    
    // useEffect(()=>{setSignUp(false)},[])
    
    // const handleZip = async () => {
    //     const res = await axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${Zipcode}?key=${process.env.REACT_APP_ZIPKEY}`)
    //     setCity(res.data.City)
    //     setState(res.data.State)
    //     setSignUp(true)
    // }
    
    
    const handleSignUp = async () => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`,{
            Name, Email, Password, Zipcode, HereFor
        })
        console.log(res);
        if(res.data.message === 'Signed up'){
            localStorage.setItem('userId', res.data.user.id)
            setUser(res.data.user)
        }   
    }
    
    const handleLogin = async () => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}users/login`,{
            Name, Email, Password
        })
        if(res.data.message === 'login successful'){
            localStorage.setItem('userId', res.data.user.id)
            setUser(res.data.user)
        }
    }


    // if(signUp === true){
    //     handleSignUp()
    // }
    

    return(
        <div>
            {props.LogOrSignState === 'signup' &&
                <div>
                    <h4>Name:</h4>
                    <input type = 'text' value={Name} onChange={(e) => { setName(e.target.value) }}/>
                    <LogSignForm Email = {Email} Password={Password} setEmail={setEmail} setPassword = {setPassword} />
                    <h4>Zip-Code:</h4>
                    <input type = 'text' value={Zipcode} onChange={(e) => { setZipcode(e.target.value) }}/>
                    <h4>I'm Here:</h4>
                    <select value={HereFor} onChange={(e) => { setHereFor(e.target.value) }}>
                        <option value=""></option>
                        <option value="for help">For Help</option>
                        <option value="to help">To Help</option>
                    </select>
                   <div>
                        <button onClick={()=>{handleSignUp()}} >Sign Up</button>
                   </div>
                </div>
            } 

            {props.LogOrSignState === 'login' &&
                <div>
                    <LogSignForm Email = {Email} Password={Password} setEmail={setEmail} setPassword = {setPassword} />
                    <button onClick={()=>{handleLogin()}}>Login</button>
                </div>
            }

        </div>
    )
}

export default LogOrSign