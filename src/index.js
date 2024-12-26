import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
const App = () => {
  const counter = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" })

  }
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" })

  }
  const handleReset = () => {
    dispatch({ type: "RESET" })

  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </>
  )
}
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if(state != 0){
      return state - 1;
      }
      case "RESET":
      return 0;
      default:
         return state;

  }
}
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>


);

