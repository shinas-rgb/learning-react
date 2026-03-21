import './App.css'
import { useState } from 'react';

function Greeting(props) {
  return <h1>Hello Iam {props.name} {props.age} years old</h1>
}

function App() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [name, setName] = useState("");

  function toggleGreeting() {
    setShowGreeting(!showGreeting);
  }

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <div>
      <button onClick={toggleGreeting}>Click Me</button>
      {showGreeting && (
        <Greeting name={"malik"} age={32} />
      )}

      <br />
      <br />
      <input type="text" placeholder="Name" onChange={handleChange} />
      <br />
      {name}
      {/* {showGreeting ? ( */}
      {/*   <Greeting name={"Shinas"} age={18} /> */}
      {/* ) : ( */}
      {/*   <button>Click me</button> */}
      {/* )} */}
    </div>
  )
}

export default App
