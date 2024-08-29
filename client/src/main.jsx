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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/home',
    element: <App />,
    children: [
      {
        path: '/home/chat',
        element: <Home />,
      },
      {
        path: '/home/mail',
        element: <MAil />,
      },
      {
        path: '/home/group',
        element: <GroupChat />,
      },
      {
        path: '/home/flag',
        element: <Flag />,
      },
      {
        path: '/home/storage',
        element: <Storage />,
      },
    ],
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
