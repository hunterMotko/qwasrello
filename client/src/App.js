import React, { useState, useEffect } from 'react';
import './assets/main.css'
import NavBar from './components/NavBar';
import Task from './components/Task';

import DragNDrop from './components/DragNDrop';

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/api/tasks`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setTasks(data);
  //       setIsLoading(false);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  const data = [
    { title: 'open', items: ['1', '2', '3'] },
    { title: 'in progress', items: ['4', '5'] },
    { title: 'done', items: ['6', '7'] }
  ]

  return (
    <div className='App'>
      {/* <NavBar /> */}
      <DragNDrop data={data} />


    </div>

        /* there should be more components!!!
        <div className='dnd-group'>
          <div className='group-title'>open</div>
          <div>
            {tasks.filter((i) => i.status === "open").map(task => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className='dnd-group'>
          <div className='group-title'>in progress</div>
          <div>
            {tasks.filter((i) => i.status === "in progress").map(task => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className='dnd-group'>
          <div className='group-title'>done</div>
          <div>
            {tasks.filter((i) => i.status === "done").map(task => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div> */

  /* </div> */ 
  /* <div className="container mx-auto">
        <div className='grid grid-cols-3'>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div> */

  /* </div> */ 
  );
}

export default App;
