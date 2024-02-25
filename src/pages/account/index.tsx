import React from 'react'
import Navbar from '../../components/navbar'
import ProtectedRoute from "../../components/protectedRoute";

const Account = () => {
  return (
    <ProtectedRoute>    
      <Navbar />
    </ProtectedRoute>
  )
}

export default Account
