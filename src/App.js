import './App.css';
import plus from './images/plus.webp'
import todo from './images/to-do-list.png'
import TodoElemnt from './component/TodoElement/TodoElemnt'
import {api} from './api/api'
import { useEffect, useState } from 'react';

function App() {
  const [toDo,setToDo] = useState([]);
  const [inputText,setInputText] = useState('');

  const fetchToDo = async () =>{
    try{
      const res = await api.get('/ToDo');
      setToDo(res.data);
    } catch {
      console.log('Featch error');
    }
  }

  useEffect(() => {
    fetchToDo();

    const interval = setInterval(() => {
      fetchToDo();
    }, 300000);

    return () => clearInterval(interval);
  }, []);



  const createTask = () => {    
    if (inputText) {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
      const year = now.getFullYear();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
  
      const ids = toDo.map(task => Number(task.id)).filter(id => !isNaN(id));
      const lastTaskId = ids.length > 0 ? Math.max(...ids) : 0;

      const newText = inputText;

      console.log(lastTaskId)
      
      const newTask = {
        id: (lastTaskId + 1).toString(),
        date: `${day}.${month}.${year}`,
        time: `${hours}:${minutes}`,
        text: newText
      };
      
      sendNewTask(newTask);
    }
  }

  const sendNewTask = async (newTask) => {
    try {
      await api.post('/ToDo', newTask);
      fetchToDo();
    } catch (error) {
      console.log('Error sending new task:', error);
    }
  };

  const deleteTasck = async (id) =>{
    console.log(typeof(id))
    try{
      const res = await api.delete(`/ToDo/${id}`);
      fetchToDo();
    } catch(error) {
      console.log(error)
    }
  }
  
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      createTask();
      setInputText('');
    }
  };
  
  return (
    <div className="App">
      <div className='todoBlock'>
        <div className='label'>
          <img src={todo} alt='to do'/>
          <h1>To do:</h1>
        </div>
        <div className='list'>
        {
          toDo && toDo.length > 0 ? (
            toDo.map(t => (
              <TodoElemnt 
                deleteTasck={deleteTasck}
                id={t.id}
                time={t.time}
                date={t.date}
                text={t.text}
                key={t.id}
              />
            ))
          ):(
            console.log("Waiting data")
          )
        }
        </div>
        <div className='createTodo'>
          <textarea 
            placeholder='Write'
            value={inputText}
            onChange={(e)=>{
              setInputText(e.target.value);
            }}
            onKeyDown={onKeyDown}
          />
          <div className='sendButtonBox'>
            <div className='sendButton' onClick={()=>{ createTask(); setInputText(''); }}>
              <img src={plus} alt='plus'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
