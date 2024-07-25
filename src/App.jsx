import { useState } from 'react';
import './App.css';
import { listToDo } from './list_todo';

const ToDo = (props) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      
    </div>
  );
};

const App = () => {
  const [completed, setCompleted] = useState([]);

  const handleAddToCompleted = (listToDo) => {
    let newCompleted = [...completed]
    newCompleted.push(listItem)
    setCompleted(newCompleted)
  };

  const handleRemove = (index) => {
    let newCompleted = [...completed]
    newCompleted.splice(index, 1)
    setCompleted(newCompleted)
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>

      <div>
        <h2>To-Do</h2>
        {listToDo.map((listInfo, index) => {
          return <ToDo key={index} listObj={listInfo} completedFunc={handleAddToCompleted}/>
        })}

      </div>

      <div>
        <h2>Completed</h2>
        {listToDo.map((completedInfo, index) => {
        return <Completed key={index} completedObj={completedInfo} removeFunc={() => {handleRemove(index)}}/>
      })}
      </div>
    </div>
  );
};

export default App;