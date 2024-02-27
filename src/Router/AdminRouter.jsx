import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminLogin from '../Pages/Admin/AdminLogin'
import EditProduct from '../Pages/Admin/EditProduct'

function AdminRouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<AdminHome/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/edit' element={<EditProduct/>}/>
        </Routes>
    </div>
  )
}

export default AdminRouter