
import './App.css';
import AddTask from './components/addtask/AddTask';
import ListTask from './components/listTask/ListTask';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
    
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
