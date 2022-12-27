import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import BigSprin from '../component/spiner/BigSprin'
import { AuthContext } from '../context/AuthProvider'

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <BigSprin/>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default Private