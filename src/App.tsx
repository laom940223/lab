import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { ProtectedRoute } from './components/protectedRoute'
import { Login } from './pages/login'
import { Layout } from 'antd'
import { AppLayout } from './components/appLayout'

function App() {
  

  return (
  
      <>
        <Routes>
            <Route path='/' element={ 
            
              <ProtectedRoute>
                <AppLayout>
                    <Home/>
                </AppLayout>
              </ProtectedRoute>
            } />


            <Route path='/login' element={<Login/>} />

        </Routes>

      </>
  )
}

export default App
