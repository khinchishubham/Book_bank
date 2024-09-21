import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
function Connect() {
  return (
      <>
          <Navbar />
          <div className='min-h-screen'>
              <Contact/>
          </div>
          <Footer/>
      </>
  )
}

export default Connect
