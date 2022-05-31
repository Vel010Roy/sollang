import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return <Router>
    <Routes>
      <Route path = "/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
}


export default App;

// import { useEffect, useState } from "react";

// function App() {

//   const [toDo, setToDo] = useState("")
//   const [toDos, setToDos] = useState([])
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//       event.preventDefault();
//       if (toDo === "") {
//         return;
//       }
//       setToDos((currentArray) => [toDo, ...currentArray])    
//       setToDo("")
//     }

//   return (
//     <div>
//       <h1>My To Dos({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="write your to do..." />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       {toDos.map((item, index) => <li key={index}>{item}</li>)}
//     </div>
//   );
// }

// export default App;
