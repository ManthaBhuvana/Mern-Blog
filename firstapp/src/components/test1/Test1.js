//create Test1 component
import './Test1.css'


function Test1(props){ //{ data: 30 }
    //state

    return(
       <div className="test1-div">
         <h1>Test1 component</h1>
          <h3>{props.data}</h3>
       </div>
    )
}


export default Test1;