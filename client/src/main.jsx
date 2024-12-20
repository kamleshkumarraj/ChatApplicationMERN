import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/authentication/Register.jsx'
import Login from './components/authentication/Login.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home.jsx'
import 'react-toastify/dist/ReactToastify.css'
import ForgotPassword from './components/authentication/ForgotPassword.jsx'
import ResetPassword from './components/authentication/ResetPassword.jsx'
import GroupChat from './pages/GroupChat.jsx'
import Flag from './pages/Flag.jsx'
import Storage from './pages/Storage.jsx'
import MAil from './pages/MAil.jsx'
import './style.css'
import { AppDataWrapper } from './context/AppDataWrapper.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppDataWrapper>
        {' '}
        <App />{' '}
      </AppDataWrapper>
    ),
    children: [
      {
        path: '/chat',
        element: <Home />,
      },
      {
        path: '/mail',
        element: <MAil />,
      },
      {
        path: '/group',
        element: <GroupChat />,
      },
      {
        path: '/flag',
        element: <Flag />,
      },
      {
        path: '/storage',
        element: <Storage />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: (
      <AppDataWrapper>
        <Login />
      </AppDataWrapper>
    ),
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },

  {
    path: '/api/v1/auth/reset-password/:tocken',
    element: <ResetPassword />,
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
      bodyClassName="toastBody"
    />
    <RouterProvider router={router} />
  </Provider>
)
