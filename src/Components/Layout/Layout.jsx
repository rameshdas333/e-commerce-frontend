import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const layout = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen'>
       <Outlet></Outlet>
      </main>
      <Footer />    
    </div>
  )
}

export default layout

