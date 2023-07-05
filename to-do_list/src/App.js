import Task from './Components/Task'
import './App.css';

function App() {

  const tasks = [

    {text: "Task 1", completed: false}, 

    {text: "Task 2", completed: true}, 

    {text: "Task 3", completed: false} 

  ];

  return (
    <div className="App">
      
      <Task tasks={ tasks }></Task>

    </div>
  );
}

export default App;
