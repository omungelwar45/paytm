import {Signup} from './pages/signup'
import {Signin} from './pages/signin'
import { BrowserRouter,Routes,Route, useNavigate, Navigate } from 'react-router-dom'
import {Dashboard} from './pages/dashboard'
import {SendMoney} from './pages/SendMoney' 

function App() {
  
  return (
    <>
      < BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/send' element={<SendMoney/>}/>
        </Routes>
      </ BrowserRouter>
    </>
  )
}

export default App
