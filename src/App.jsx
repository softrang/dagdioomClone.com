import React from 'react'
import Header from './Header/Header.jsx'
import Page1 from './component/Page1.jsx'
import Footer from './Footer/Footer.jsx'

import Page2 from './component/Page2.jsx'
import Page3 from './component/Page3.jsx'


import { DetaProvider } from './Context/ShareDeta.jsx'
import Pagination from './component/Pagination.jsx'

const App = () => {
  return (
    <>
    <DetaProvider> 
    
    <Header/>
    <Page1/>
    <Page2/>
   <Page3/>
   <Pagination/>
    <Footer/>
    
    </DetaProvider>
    </>
  )
}

export default App
