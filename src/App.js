import './App.css';
import plus from './images/plus.webp'
import todo from './images/to-do-list.png'
import TodoElemnt from './component/TodoElement/TodoElemnt'
function App() {
  return (
    <div className="App">
      <div className='todoBlock'>
        <div className='label'>
          <h1>To do</h1>
          <img src={todo} alt='to do'/>
        </div>
        <div className='list'>
          <TodoElemnt/>
        </div>
        <div className='createTodo'>
          <textarea placeholder='Write'/>
          <div className='sendButtonBox'>
            <div className='sendButton'>
              <img src={plus} alt='plus'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
