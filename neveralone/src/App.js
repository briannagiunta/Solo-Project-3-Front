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
import AddNewPage from './pages/addNewPage'
import EventInfo from './pages/eventInfo'
import JobInfo from './pages/jobInfo'


function App() {
  const {userState, fetchUser, postState, shouldRedirectState, redirectState, allEventsState, fetchAllEvents,allJobsState, fetchAllJobs, fetchSavedEvents, fetchSavedJobs} = useContext(UserContext)
  const [user,setUser] = userState
  const [allEvents, setAllEvents] = allEventsState
  const [allJobs, setAllJobs] = allJobsState
  const [shouldRedirect, setShouldRedirect] = shouldRedirectState
  const [redirectTo, setRedirectTo] = redirectState
  const [LogOrSignState, setLogOrSignState] = useState('')
  const [addFormState, setAddFormState] = useState('')

  useEffect(()=>{fetchUser()},[])
  useEffect(()=>{setShouldRedirect('false')},[])
  // useEffect(()=>{fetchAllEvents()},[])
  // useEffect(()=>{fetchAllJobs()},[])
  // useEffect(()=>{fetchSavedEvents()},[])
  // useEffect(()=>{fetchSavedJobs()},[])


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

      <Route exact path= '/events/:id' render={(props) => {
        const event = allEvents.find(event => event.id.toString() === props.match.params.id)
        props = {...props, ...event}
        if(shouldRedirect === 'true'){
          return <Redirect to= {`${redirectTo}`} />
        }else{
          return <EventInfo {...props} />
        }
      }}/>

      <Route exact path= '/jobs/:id' render={(props) => {
        const job = allJobs.find(job => job.id.toString() === props.match.params.id)
        props = {...props, ...job}
        if(shouldRedirect === 'true'){
          return <Redirect to= {`${redirectTo}`} />
        }else{
          return <JobInfo {...props} />
        }
      }}/>

      





      <Route exact path= '/mycommunity' render= {() => <MyCommunity />} />  
      <Route exact path= '/mycalendar' render= {() => <MyCalendar />} />
      <Route exact path= '/myposts' render= {() => <MyPosts setAddFormState = {setAddFormState}/>} />
      <Route exact path= '/myevents' render= {() => <MyEvents setAddFormState = {setAddFormState}/>} />
      <Route exact path= '/myjobs' render= {() => <MyJobs setAddFormState = {setAddFormState} />} />
      <Route exact path= '/addnew' render= {() => {
        if(shouldRedirect === 'true'){
          return <Redirect to= {`${redirectTo}`} />
        }else{  
          return <AddNewPage addFormState={addFormState} />} 
      }} />

    
    </div>
  );
}

export default App;
