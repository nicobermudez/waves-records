import React from 'react'

function Logout() {
  localStorage.removeItem('jwt')
  return window.location = "http://localhost:3001"
}

export default Logout
