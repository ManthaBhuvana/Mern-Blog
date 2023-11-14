import {useState} from 'react'

function StateDemo(){

    //state
    let [counter,setCounter]=useState(10)
    let [username,setUsername]=useState('Rajesh')
    let [emp,setEmp]=useState({ eid:100,name:'ravi',city:'Hyderabad'})
    let [skills,setSkills]=useState(['js','css'])

    function incrementCounter(){
        //modify state
        setCounter(counter+1)
    }

    function changeName(){
        setUsername("Surya")
    }

    function changeEmpData(){
        setEmp({...emp,city:'Chennai'}) //{ eid:100,name:'ravi',name:'Ravi kumar'}
    }

    function addSkill(){
       setSkills([...skills,'react'])
    }

    function deleteSkill(){
        //create copy of skills
        let copySkills=[...skills]
        //remove a skill from copy
        copySkills.pop()
        //replace old state with new state
        setSkills(copySkills)
    }

    return(
        <div>
            <h2 className="display-2">State Demo</h2>
            <h1 className="display-4">{counter}</h1>
            <h1 className="display-4">{username}</h1>
            <button className="btn btn-success" onClick={incrementCounter}>Increment</button>
            <button className="btn btn-danger" onClick={changeName}>Change name</button>

            <h1>{emp.eid}</h1>
            <h1>{emp.name}</h1>
            <h1>{emp.city}</h1>
            <button className="btn btn-warning" onClick={changeEmpData}>Modify emp</button>

            {
                skills.map((skill,ind)=><h1 key={ind}>{skill}</h1>)
            }
            <button className="btn btn-primary" onClick={addSkill}>Add new skill</button>
            <button className="btn btn-secondary" onClick={deleteSkill}>Delete skill</button>
        </div>
    )

}


export default StateDemo;