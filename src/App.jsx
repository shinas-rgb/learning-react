import './App.css'

function Greeting(props) {
  return <h1>Hello Iam {props.name} {props.age} years old</h1>
}

function App() {

  return (
    <div>
      <Greeting name={"Shinas"} age={18} />
      <Greeting name={"Jessica"} age={22} />
      <Greeting name={"Jack"} age={25} />
      <Greeting name={"Micheal"} age={19} />
    </div>
  )
}

export default App
