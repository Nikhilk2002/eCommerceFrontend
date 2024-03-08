import React from 'react'
import Header from '../../Component/Admin/Header/Header'
// import WelcomePage from '../../Component/Admin/HomePage/WelcomePage'
import MainHome from '../../Component/Admin/HomePage/MainHome'

function AdminHome() {
  return (
    <div>
      <Header/>
      {/* <WelcomePage/> */}
      <MainHome/>
    </div>
  )
}

export default AdminHome