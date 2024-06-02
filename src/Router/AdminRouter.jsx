import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminLogin from '../Pages/Admin/AdminLogin'
import USersList from '../Pages/Admin/USersList'
import OrdersList from '../Pages/Admin/OrdersList'
import ProductsList from '../Pages/Admin/ProductsList'
import Add_product from '../Pages/Admin/Add_product'

function AdminRouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<AdminHome/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/order' element={<OrdersList/>}/>
        <Route path='/user' element={<USersList/>}/>
        <Route path='/add' element={<Add_product/>}/>
        <Route path='/product' element={<ProductsList/>}/>
        </Routes>
    </div>
  )
}

export default AdminRouter