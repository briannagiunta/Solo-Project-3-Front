const Job = (props) =>{
    return(
        <div className = 'event-job-container' >

            <span className = 'bold'>{props.job.title}</span><br/>
            
            <div className = 'event-job-text'>
              <div> Type: {props.job.type}</div>
              <div> Zip: {props.job.zip}</div>
            </div>

        </div>
    )
}

export default Job