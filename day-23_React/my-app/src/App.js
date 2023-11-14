// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  console.log("Previous Value", like);
  return (
    <div>
      <button onClick={() => {
        setLike(like++);
        console.log(like);
      }}> 👍 {like}</button>
      <button onClick={() => {
        setDislike(dislike--);
      }}> 👎 {dislike}  </button>
    </div>

  )
}

export default App;
