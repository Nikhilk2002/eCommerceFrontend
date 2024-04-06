
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouter from "./Router/AdminRouter";
import UserRouter from "./Router/UserRouter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/*' element={<UserRouter/>}/>
         <Route path='/admin/*' element={<AdminRouter/>}/>
        </Routes>
        <ToastContainer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
