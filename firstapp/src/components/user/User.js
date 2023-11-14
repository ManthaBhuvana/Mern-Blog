import './User.css'

function User(props){
    console.log(props) //{ userData :{}}
    return(
        <div className='card p-4'>
            <img src={props.userData.avatar} alt="" className='w-75 rounded-5 d-block mx-auto' />
            <div className="card-body">
                <p className="lead">{props.userData.first_name} {props.userData.last}</p>
                <p className="lead">{props.userData.email}</p>
            </div>
        </div>
    )
}

export default User;