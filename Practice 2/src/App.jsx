import { useState } from 'react'

import './App.css'
import GreetUser from './components/greeting'


function App() {
  const [count, setCount] = useState(0)
  const tasks = [
    {name: "Drink Chai", completed: true},
    {name: "Exercise", completed: false}
]
  const date = new Date().toLocaleDateString() 

  return (
    <>
      <div>
        <h3>{date}</h3>
        <GreetUser name="Timmy" isPremium={true}/>
      </div>
      <ul>
          Tasks: {tasks.map((task) => ( 
            <li key={task.name}>
              {task.name} {task.completed ? "✅" : "❌" }
            </li>
          ) )}
      </ul>
    </>
  )
}

export default App
