import React from 'react'
import Header from '../../Component/User/Header/Header'
import MainHome from '../../Component/User/HomePage/MainHome'
import Footer from '../../Component/User/Footer/Footer'
import WelcomePage from '../../Component/User/HomePage/WelcomePage'

function UserHome() {
  return (
    <div>
      <Header/>
      <WelcomePage/>
      <MainHome/>
      <Footer/>
    </div>
  )
}

export default UserHome