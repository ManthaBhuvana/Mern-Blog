import Test1 from './components/test1/Test1';
//import Test2 from './components/test2/Test2'
import "./App.css";

function App() {
  //state
  // let emps = [
  //   { eno: 100, name: "ravi", age: 21, city: "hyderabad" },
  //   { eno: 200, name: "bhanu", age: 32, city: "chennai" },
  //   { eno: 300, name: "manasa", age: 22, city: "hyderabad" },
  //   { eno: 400, name: "vikas", age: 27, city: "bangalore" },
  //   { eno: 500, name: "suresh", age: 35, city: "hyderabad" },
  // ];

  //req handler function
  // function test(){
  //   console.log("test funciton called")
  // }

  // function testAgain(a){
  //   console.log("test again called and a is ",a)
  // }

  return (
    <div>
      <h1 className="text-info display-1 bg-light">Welcome to React</h1>
      <div className="container">

      {/* nest Test1 component */}
        <Test1 />
        {/* <Test2 /> */}




{/* 
        <button className="btn btn-success" onClick={test}>Click test</button>
        <button className="btn btn-warning" onClick={()=>testAgain(100)}>Click testAgain</button> */}
        {/* Table of emps */}
        {/* <table className="table text-center">
        <thead>
          <tr>
            <th>Eno</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            emps.map(empObj=><tr key={empObj.eno}>
              <td>{empObj.eno}</td>
              <td>{empObj.name}</td>
              <td>{empObj.age}</td>
              <td>{empObj.city}</td>
            </tr>)
          }
        </tbody>
      </table> */}

        {/* Grid of cards of emps */}
        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {emps.map((empObj) => (
            <div className="col" key={empObj.eno}>
              <div className="card">
                <div className="card-body">
                  <h3>{empObj.eno}</h3>
                  <p className="lead">{empObj.name}</p>
                  <p className="lead">{empObj.age}</p>
                  <p className="lead">{empObj.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
