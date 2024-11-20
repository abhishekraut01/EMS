import { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthContext'

export default function App() {
  const [user, setUser] = useState(null)
  const Authdata = useContext(AuthContext)

  const handleLogin = (username, password) => {
    if (Authdata.user && Authdata.user.admin.find((e) => username == e.email && password == e.password)){
      setUser('admin')
    } else if (Authdata.user && Authdata.user.employee.find((e) => username == e.email && password == e.password)) {
      setUser('user')
    } else {
      alert("Invalid username or password")
      return
    }
  }


  // useEffect(() => {
  //   setLocalStorage() 
  //   getLocalStorage();
  // })

  return (
    <>
      {
        !user ? <Login handleLogin={handleLogin} /> : null
      }
      {
        user == 'admin' ? <AdminDashboard /> : null
      }
      {
        user == 'user' ? <EmployeeDashboard /> : null
      }
    </>
  )
}