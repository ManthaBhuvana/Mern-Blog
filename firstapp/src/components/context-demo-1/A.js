import {useContext} from 'react'
import B from './B'
import {CounterContext} from '../../contexts/CounterContext'
import {UsersContext} from '../../contexts/UsersContext'

function A() {

 let [counter,setCounter]= useContext(CounterContext)
 let users=useContext(UsersContext)

  return (
    <div className='bg-warning p-5'>
        <h1>Component-A</h1>
        <p className="lead fs-1">Counter : {counter}</p>
        <button className="btn btn-light" onClick={()=>setCounter(counter+1)}>Change counter</button>
        {
          users.map(userObj=><p key={userObj.id}>{userObj.username}</p>)
        }
        <B />
    </div>
  )
}

export default A