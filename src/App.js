
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouter from "./Router/AdminRouter";
import UserRouter from "./Router/UserRouter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/*' element={<UserRouter/>}/>
         <Route path='/admin/*' element={<AdminRouter/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
