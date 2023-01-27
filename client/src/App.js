import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/todo')
    setTodoList(response.data)
  }

  useEffect(() => {fetchData()},[]);

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post('http://localhost:4000/api/todo',{text, done})
    fetchData()
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={onSumbitHandler}>
        <input name='text'/>
        <input name='done' type="checkbox" />
        <input type='submit' value='추가' />
      </form>
      {todoList.map((todo) => (
        <div key={todo.id} style={{display:'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "y" : "n" }</div>
        </div>
      ))}
    </div>
  );
}

export default App;