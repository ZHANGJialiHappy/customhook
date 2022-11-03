import './App.css';
import {useCount} from "./components/useCount"

function App() {
    const {count, decrease, increase, reset} = useCount();
  return (
    <div className="App">
        {count}
       <button onClick={decrease}>decrease</button>
       <button onClick={increase}>increase</button>
       <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
