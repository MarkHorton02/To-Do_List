import { useState } from 'react';
import './App.css';
import { listToDo } from './list_todo';

const ToDo = (props) => {
  return (
    <div className="item">
      <p className="itemText">{props.listObj}</p>
      <button className="button" onClick={() => props.completedFunc(props.listObj)}>✔</button>
      <button className="button" onClick={() => props.deleteFunc(props.listObj)}>✖</button>
    </div>
  );
};

const Completed = ({completedObj, removeFunc}) => {
  return (
    <div className="item">
      <p className="itemText">{completedObj}</p>
      <button className="button" onClick={removeFunc}>X</button>
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
    <div className="bigContainer">
      <h1 className="title">To-Do List</h1>

      <div className="inputToDo">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
          className="inputBox"
        />
        <button className="button" onClick={handleAddItem}>Add</button>
      </div>

      <div className="container">
        <div className="toDoSection">
          <h2 className="subheading">To-Do</h2>
          {active.map((listInfo, index) => (
            <ToDo
              key={index}
              listObj={listInfo}
              completedFunc={handleAddToCompleted}
              deleteFunc={handleDeleteFromActive}
            />
          ))}
        </div>

        <div className="completedSection">
          <h2 className="subheading">Completed</h2>
          {completed.map((completedInfo, index) => (
            <Completed key={index} completedObj={completedInfo} removeFunc={() => handleRemove(completedInfo)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
