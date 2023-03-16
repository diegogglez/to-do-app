import { useEffect, useState } from 'react';
import Auth from './components/Auth';
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem';

const App = () => {
  const userEmail = 'diego@test.com';
  const [task, setTask] = useState(null);

  const authToken = false;
  
  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${userEmail}`);
      const json = await response.json();
      setTask(json);
    } catch (err) {
      console.error(err);      
    }
  }

  useEffect(() => {
    if(authToken) {
      getData();
    }
  }, []);

  console.log(task);

  //Sort by date
  const sortedTask = task?.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="app">
      {!authToken && <Auth/>}
      {authToken &&
        <>
        <ListHeader listName={'Holiday tick list'} getData={getData}></ListHeader>
        {sortedTask?.map((task) => <ListItem key={task.id} task={task} getData={getData}></ListItem>)}
        </>}
    </div>
  );
}

export default App;
