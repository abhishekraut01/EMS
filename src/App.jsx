import { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { AuthContext } from './Context/AuthContext'

export default function App() {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    //we get the logged in user from local storage and setLoggedInUserData so that we dont get logged out when we refresh
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const handleLogin = (username, password) => {
    if (Authdata.user && Authdata.user.admin.find((e) => username == e.email && password == e.password)) {
      setUser('admin')
      //this will add the loggedInUser in local storage and as local storage cant store the objects we need to convert then in json and we use JSON.stringify
      localStorage.setItem("loggedInUser", JSON.stringify({ role: " admin" }))
    } else if (Authdata.user) {
      const employee = Authdata.user.employee.find((e) => username == e.email && password == e.password)
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: " employee" , data: employee }))
      }

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
        user == 'admin' ? <AdminDashboard data={LoggedInUserData}/> : null
      }
      {
        user == 'employee' ? <EmployeeDashboard data={LoggedInUserData} /> : null
      }
    </>
  )
}