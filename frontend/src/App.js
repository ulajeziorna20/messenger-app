import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


// redux-toolkit
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './store/counter'


function App() {
  // redux counter
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()



  return (
    <div className="App">
      {/* <div className="counter" style={{color:'white', fontSize: '4em'}}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}

      <Routes>
        <Route path="/messenger/login" element={<Login />} />
        <Route path="/messenger/register" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
}

export default App;
