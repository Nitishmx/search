
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Cardcreate from './Cardcreate';
// import Pages from './Pages';
// // import Pages from './Pages';
// function App() {
//   return (
    
//        <div className="App">
//          <Routes>
//                  <Route path='/view' element={<Pages/>}></Route>
//                  <Route path='/' element={ <Cardcreate/>}></Route>
//        </Routes>
    
//     </div>
    
   
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react'
// import Dataapi from './Dataapi'
// function App() {
//   return (
//     <>
//       <div>Data fetch to use API</div>
//       {/* <Dataapi/> */}
  
      
//     </>
//   )
// }

// export default App

// **********************************************************************
// SEARCHING APPLICATION CREATE
import React from 'react'
import Card_search from './Component/Card_search'

function App() {
  return (
    <>
      <div className='flex items-center justify-center mt-10'>
          <Card_search/>
      </div>

    </>
  )
}

export default App


// **********************************************************************
// import React from 'react'
// import Reducer from './Component/Reducer'

// function App() {
//   return (
//    <>
//       <div>App</div>
//       <Reducer/>
//    </>
//   )
// }

// export default App