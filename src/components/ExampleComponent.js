import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "../actions";

const ExampleComponent = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    return (
        <div id='component'>
            <h1>Component utilizing the same global state and functionality. (Not prop drilling) </h1>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default ExampleComponent