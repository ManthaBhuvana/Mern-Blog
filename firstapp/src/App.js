import "./App.css";
import A from "./components/context-demo-1/A";
import D from "./components/context-demo-1/D";



function App() {
  //state

  return (
    <div>
      <div className="container">
        {/* nest StateDemo */}

        <A />
        <D />
      </div>
    </div>
  );
}

export default App;
