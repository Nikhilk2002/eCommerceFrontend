import React from 'react'
import { Route,Routes} from "react-router-dom"
import UserHome from '../Pages/User/UserHome'
import SingleProduct from '../Pages/User/SingleProduct'
import UserLogin from '../Pages/User/UserLogin'
import UserSignup from '../Pages/User/UserSignup'

function UserRouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/details' element={<SingleProduct/>}/>

        </Routes>

    </div>
  )
}

export default UserRouter