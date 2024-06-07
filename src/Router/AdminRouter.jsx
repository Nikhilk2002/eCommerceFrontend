import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminLogin from '../Pages/Admin/AdminLogin'
import USersList from '../Pages/Admin/USersList'
import OrdersList from '../Pages/Admin/OrdersList'
import ProductsList from '../Pages/Admin/ProductsList'
import AddProduct from '../Pages/Admin/AddProduct'
import EditProduct from '../Component/Admin/EditProducts/EditProduct'

function AdminRouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<AdminHome/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/order' element={<OrdersList/>}/>
        <Route path='/user' element={<USersList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/edit/:productId' element={<EditProduct/>} />
        <Route path='/product' element={<ProductsList/>}/>
        </Routes>
    </div>
  )
}

export default AdminRouter