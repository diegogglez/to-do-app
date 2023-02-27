import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem';

const App = () => {
  const userEmail = 'diego@test.com';
  const [task, setTask] = useState(null);
  
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTask(json);
    } catch (err) {
      console.error(err);      
    }
  }

  useEffect(() => getData, []);

  console.log(task);

  //Sort by date
  const sortedTask = task?.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="app">
      <ListHeader listName={'Holiday tick list'} getData={getData}></ListHeader>
      {sortedTask?.map((task) => <ListItem key={task.id} task={task} getData={getData}></ListItem>)}
    </div>
  );
}

export default App;
