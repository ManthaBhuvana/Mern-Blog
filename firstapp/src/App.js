import './App.css'
import img1 from './images/pic-1.jpeg'

function App() {
  //state
  let a = 10;
  let personName = "Ravi";
  let student={
    sno:100,
    name:"Bhanu"
  }

  let skills=['js','angular','react','node','Java','Dotnet']

  return (
    <div>
      <h1 className='text-danger display-1 bg-warning'>Welcome to React</h1>
      {/* Adding images */}
      <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" alt="" />
      <img src={img1} alt="" />
      <h5 style={{backgroundColor:'red',color:'white'}}>Inline CSS</h5>
      <p>Value of a is {a}</p>
      <p>Name of person is {personName}</p>
      <h2>Sno : {student.sno}</h2>
      <h2>Name : {student.name}</h2>

      {
        skills.map((skill,index)=><h2 key={index}>{skill}</h2>)
      }

    </div>
  );
}

export default App;
