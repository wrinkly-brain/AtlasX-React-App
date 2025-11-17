import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sessions from './pages/Sessions'
import AddSession from './pages/AddSession'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import ErrorPage from './pages/ErrorPage'
import { ProfileProvider } from './ProfileProvider'
import PrivateRoutes from './PrivateRoutes'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ProfileProvider>
            <NavBar />
            <div className='container p-3'>
                <Routes>
                    <Route path='/' element={<Sessions />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path='/AddSession' element={<AddSession />} />
                    </Route>
                </Routes>
            </div>
        </ProfileProvider>
    </BrowserRouter>
)
