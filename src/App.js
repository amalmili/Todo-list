import './App.css';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [todos, setTodos] = useState([]);
  const [fall, setFall] = useState({});
  const [complete, setComplete] = useState({});
  const inputRef = useRef();

  const handleClick = () => {
    const text = inputRef.current.value;
    if (text.trim()) {
      setTodos([...todos, text]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (index) => {
    setFall((prevFall) => ({ ...prevFall, [index]: true }));
    setTimeout(() => {
      setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
      setFall((prevFall) => ({ ...prevFall, [index]: false }));
    }, 1000);
  };

  const handleComplete = (index) => {
    setComplete((prevComplete) => ({ ...prevComplete, [index]: !prevComplete[index] }));
  };

  return (
    <div className="App">
      <div className="container">
        <h2>JUST DO IT...!</h2>
        <input ref={inputRef} placeholder="add a task..." />
        <button onClick={handleClick}>I Got This!</button>
        <div className="mylist">
          <ul>
            {todos.map((todo, index) => (
              <div className={`todo ${fall[index] ? 'fall' : ''}`} key={index}>
                <li className={complete[index] ? 'complete' : ''}>{todo}</li>
                <button onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button onClick={() => handleComplete(index)}>
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
