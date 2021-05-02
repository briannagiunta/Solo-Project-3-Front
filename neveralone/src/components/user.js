const User = (props) => {
    return(
        <div className = 'user'>
            <div className = 'connect-pic'>

            </div>
            <div className = 'text-container'>
                <div className= 'user-text'>
                    <p><span className = 'bold'> Hi! Im {props.name}</span><br/>
                    Im here {props.hereFor} </p> 
                </div>

                <div className='userButtons'>
                    <button>Message</button>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default User