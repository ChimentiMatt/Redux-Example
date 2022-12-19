import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./actions";
import ExampleComponent from "./components/ExampleComponent";

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux example</h1>

      <div id='base-level'>
        <h1>Base level of App.js utilizing state</h1>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    
      <ExampleComponent />
    </div>
  );
}

export default App;
