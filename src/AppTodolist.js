import { useState } from "react"

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return 
    }
    setTodos(currentArray => [toDo, ...currentArray]);
    setTodo("");
  }
  console.log(toDos)
  return ( 
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text"
        placeholder="Write your to do..."/>
        <button> add To do</button>
      </form>
      <hr/>
        <ul>
        {toDos.map((item,index)=>
        <li key={index}>{item}</li>
        )}
        </ul>
    </div>
  );
}

export default App;
