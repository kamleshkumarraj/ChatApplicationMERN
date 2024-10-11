import { useSelector } from 'react-redux'
import { getUser } from '../../store/slice/auth/Self'
import { useNavigate } from 'react-router-dom'
function ProtectedRoute({ Children }) {
  const navigate = useNavigate()
  const user = useSelector(getUser)
  return <div>{user.firstname != '' ? Children : navigate('/login')}</div>
}

export default ProtectedRoute
