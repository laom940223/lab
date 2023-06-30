import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { ProtectedRoute } from './components/protectedRoute'
import { Login } from './pages/login'

function App() {
  

  return (
  
      <>
        <Routes>
            <Route path='/' element={ 
            
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />


            <Route path='/login' element={<Login/>} />

        </Routes>

      </>
  )
}

export default App
