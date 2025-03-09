import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../providers/AuthProvider'
import { RiseLoader } from 'react-spinners'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <RiseLoader />
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute