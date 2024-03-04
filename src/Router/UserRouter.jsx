import React from 'react'
import { Route,Routes} from "react-router-dom"
import UserHome from '../Pages/User/UserHome'
import SingleProduct from '../Pages/User/SingleProduct'
import UserLogin from '../Pages/User/UserLogin'
import UserSignup from '../Pages/User/UserSignup'
import UserShop from '../Pages/User/UserShop'
import AdultShop from '../Pages/User/AdultShop'
import ChildShop from '../Pages/User/ChildShop'

function UserRouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/details' element={<SingleProduct/>}/>
        <Route path='/shop' element={<UserShop/>}/>
        <Route path='/adult' element={<AdultShop/>}/>
        <Route path='/child' element={<ChildShop/>}/>

        </Routes>

    </div>
  )
}

export default UserRouter