import { useState } from 'react';
import './App.css';
import { listToDo } from './list_todo';

const ToDo = (props) => {
  return (
    <div>
      <p>{props.listObj}</p>
      <button onClick={() => props.completedFunc(props.listObj)}>Move to Completed</button>
      <button onClick={() => props.deleteFunc(props.listObj)}>Delete</button>
    </div>
  );
};

const Completed = ({completedObj, removeFunc}) => {
  return(
    <div>
      <p>{completedObj}</p>
      <button id="button" onClick={removeFunc}>X</button>
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
      <h1 className="title">To-Do List</h1>

      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>

      <div>
        <h2>To-Do</h2>
        {active.map((listInfo, index) => (
          <ToDo
            key={index}
            listObj={listInfo}
            completedFunc={handleAddToCompleted}
            deleteFunc={handleDeleteFromActive}
          />
        ))}
      </div>

      <div>
        <h2>Completed</h2>
        {completed.map((completedInfo, index) => (
          <Completed key={index} completedObj={completedInfo} removeFunc={() => handleRemove(completedInfo)} />
        ))}
      </div>
    </div>
  );
};

export default App;