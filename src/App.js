//import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './toolkit/Reducer/reducer';

const App = () => {
  //const count = useSelector((state) => state.value)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>HELLO</h1>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
          <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;
