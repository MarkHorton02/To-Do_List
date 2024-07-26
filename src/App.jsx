import { useState } from 'react';
import './App.css';
import { listToDo } from './list_todo';

const ToDo = (props) => {
  return (
    <div>
      <p>{props.listObj}</p>
      <button className="button" onClick={() => props.completedFunc(props.listObj)}>Move to Completed</button>
      <button className="button" onClick={() => props.deleteFunc(props.listObj)}>Delete</button>
    </div>
  );
};

const Completed = ({completedObj, removeFunc}) => {
  return(
    <div>
      <p>{completedObj}</p>
      <button className="button" onClick={removeFunc}>Delete</button>
    </div>
  );
};

const App = () => {
  const [active, setActive] = useState(listToDo);
  const [completed, setCompleted] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddToCompleted = (item) => {
    setCompleted([...completed, item]);
    setActive(active.filter((activeItem) => activeItem !== item));
  };

  const handleRemove = (item) => {
    setCompleted(completed.filter((completedItem) => completedItem !== item));
  };

  const handleDeleteFromActive = (item) => {
    setActive(active.filter((activeItem) => activeItem !== item));
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setActive([...active, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item">
          <h1 className="title">To-Do List</h1>
        </div>

        <div className="grid-item">
          <h2 className="subheading">To-Do</h2>
          <input type="text" className="inputBox" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add a new item"/>
          <button className="button" onClick={handleAddItem}>Add</button>
          {active.map((listInfo, index) => (
            <ToDo key={index} listObj={listInfo} completedFunc={handleAddToCompleted} deleteFunc={handleDeleteFromActive}/>
          ))}
        </div>

        <div className="grid-item">
          <h2>Completed</h2>
          {completed.map((completedInfo, index) => (
            <Completed key={index} completedObj={completedInfo} removeFunc={() => handleRemove(completedInfo)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;