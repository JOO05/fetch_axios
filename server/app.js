import express from 'express'
const app = express()
import cors from 'cors'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let id = 2;
const todoList = [{
  id:1,
  text: "첫번째 할 일",
  done:false,
}];

app.get('/api/todo',(req, res) => {
  res.json(todoList);
})

app.post('/api/todo', (req, res) => {
  const {text, done} = req.body
  todoList.push({
    id:id++,
    text,
    done,
  });
  return res.send('success');
})

app.listen(4000, () => {
  console.log("server start")
})