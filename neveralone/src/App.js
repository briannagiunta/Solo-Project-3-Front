import './App.css';
import {useState, useEffect, useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {UserContext} from './context/userContext'
import NavBar from './components/navBar'
import Home from './pages/home'
import LogOrSign from './pages/log-sign'
import Community from'./pages/community'
import Connect from './pages/connect'
import Resources from './pages/resources'
import Events from './pages/events'
import Jobs from './pages/jobs'
import MyCommunity from './pages/myCommunity'
import MyCalendar from './pages/myCalendar'
import MyPosts from './pages/myPosts'
import MyEvents from './pages/myEvents'
import MyJobs from './pages/myJobs'

function App() {
  const {userState, fetchUser, postState} = useContext(UserContext)
  const [user,setUser] = userState
  const [LogOrSignState, setLogOrSignState] = useState('')

  useEffect(()=>{fetchUser()},[])

  return (
    <div className="App">
    

      <NavBar setLogOrSignState = {setLogOrSignState} />

      <Route exact path= '/' render= {() => <Home />} />

      <Route exact path= '/log-sign' render= {() => {
        if(user.id){
          return <Redirect to='/community' />
        }else{  
          return  <LogOrSign LogOrSignState = {LogOrSignState} />} 
      }} />

      <Route exact path= '/community' render= {() => <Community />} />  
      <Route exact path= '/connect' render= {() => <Connect />} />
      <Route exact path= '/resources' render= {() => <Resources />} />
      <Route exact path= '/events' render= {() => <Events />} />
      <Route exact path= '/jobs' render= {() => <Jobs />} />

      <Route exact path= '/mycommunity' render= {() => <MyCommunity />} />  
      <Route exact path= '/mycalendar' render= {() => <MyCalendar />} />
      <Route exact path= '/myposts' render= {() => <MyPosts />} />
      <Route exact path= '/myevents' render= {() => <MyEvents />} />
      <Route exact path= '/myjobs' render= {() => <MyJobs />} />

    
    </div>
  );
}

export default App;
