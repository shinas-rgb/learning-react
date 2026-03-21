import './App.css'

function Greeting(props) {
  return <h1>Hello Iam {props.name} {props.age} years old</h1>
}

function App() {
  const todos = [
    { id: 1, text: "Learn react" },
    { id: 2, text: "Build Website" },
    { id: 3, text: "Earn money" },
  ]
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
