import { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthContext'

export default function App() {
  const [user, setUser] = useState(null)
  const Authdata = useContext(AuthContext)

  //setup who is logged in local storage

useEffect(() => {
  if(Authdata){
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(!loggedInUser){
      setUser(loggedInUser.role)
      localStorage.removeItem("loggedInUser")
    }
  }  
},[Authdata] )

  const handleLogin = (username, password) => {
    if (Authdata.user && Authdata.user.admin.find((e) => username == e.email && password == e.password)){
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role :" admin"}))
    } else if (Authdata.user && Authdata.user.employee.find((e) => username == e.email && password == e.password)) {
      setUser('employee')
      localStorage.setItem("loggedInUser", JSON.stringify({role :" employee"}))
    } else {
      alert("Invalid username or password")
      return
    }
  }

  return (
    <>
      {
        !user ? <Login handleLogin={handleLogin} /> : null
      }
      {
        user == 'admin' ? <AdminDashboard /> : null
      }
      {
        user == 'employee' ? <EmployeeDashboard /> : null
      }
    </>
  )
}