import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import APP_ROUTES from './routes'
import GuardedRoute from './components/Auth/GuardRoute'
import { NavBar } from './ui'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='body'>
          {/* <NavBar/> */}
          <CssBaseline/>
          <Routes>
            {
              APP_ROUTES.map((route) => (
                <Route key={route.path} path={route.path} element={
                  route.isProtected ? (
                    <GuardedRoute isProtected={route.isProtected}>
                      <route.component/>
                    </GuardedRoute>
                  ) : (
                    <route.component/>
                  )
                }/>
              ))
            }
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
