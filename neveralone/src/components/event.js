

const Event = (props) => {
    return(
        <div className = 'event-job-container' >

            <span className = 'bold'>{props.event.title}</span><br/>
            Type: {props.event.type}

            <div className = 'event-job-text'>
              <div> Date: {props.event.date}</div>
              <div> Zipcode: {props.event.zip}</div>
            </div>
        </div>

    )
}

export default Event