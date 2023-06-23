import React, { useState } from 'react';
import './TaskList.css';

const initialTasks = {
  ID1: {
    name: 'Go to Gym',
    dueDate: '2023/10/10',
    dueTime: '10:30',
    completed: false
  },
  ID2: {
    name: 'Go to school',
    dueDate: '2023/11/11',
    dueTime: '11:30',
    completed: false
  },
  ID3: {
    name: 'Go to the shop',
    dueDate: '2023/12/12',
    dueTime: '12:30',
    completed: false
  }
};

export function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskToggle = (taskId) => {
    setTasks((prevState) => ({
      ...prevState,
      [taskId]: {
        ...prevState[taskId],
        completed: !prevState[taskId].completed
      }
    }));
  };

  const uncompletedTasks = Object.keys(tasks).filter(
    (key) => !tasks[key].completed
  );

  const completedTasks = Object.keys(tasks).filter(
    (key) => tasks[key].completed
  );

  return (
    <div className='listContainer'>
      {uncompletedTasks.length > 0 && (
        <div className='list'>
          <div className='listHead'>Uncompleted Tasks</div>
          {uncompletedTasks.map((key) => (
            <div
              key={key}
              className={`task ${tasks[key].completed ? 'completed' : ''}`}
              onClick={() => handleTaskToggle(key)}
            >
              <div className='taskInfo'>
                <p><h1>{tasks[key].name}</h1></p>
                <div className='due'>
                  <p>Due Date: {tasks[key].dueDate}</p>
                  <p>Due Time: {tasks[key].dueTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className='list'>
          <div className='listHead'>Completed Tasks</div>
          {completedTasks.map((key) => (
            <div
              key={key}
              className={`task ${tasks[key].completed ? 'completed' : ''}`}
              onClick={() => handleTaskToggle(key)}
            >
              <div className='taskInfo'>
                <p><h1>{tasks[key].name}</h1></p>
                <div className='due'>
                  <p>Due Date: {tasks[key].dueDate}</p>
                  <p>Due Time: {tasks[key].dueTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}