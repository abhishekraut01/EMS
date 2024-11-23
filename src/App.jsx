import { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { AuthContext } from './Context/AuthContext'

export default function App() {
  const [user, setUser] = useState("")
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    //we get the logged in user from local storage and setLoggedInUserData so that we dont get logged out when we refresh
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.dataOfEmployee)
    } else {
      setUser(null);
    }

  }, [])


  const handleLogin = (username, password) => {
    if (Authdata.userData && Authdata.userData.admin.find((e) => username == e.email && password == e.password)) {
      setUser('admin')
      //this will add the loggedInUser in local storage and as local storage cant store the objects we need to convert then in json and we use JSON.stringify
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (Authdata.userData) {
      const employee = Authdata.userData.employee.find((e) => username == e.email && password == e.password)
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", dataOfEmployee: employee }))
      }

    } else {
      alert("Invalid username or password")
      return
    }
  }

  return (
    <>
      {user === null && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard data={LoggedInUserData} />}
      {user === "employee" && <EmployeeDashboard data={LoggedInUserData} />}
    </>
  )
}