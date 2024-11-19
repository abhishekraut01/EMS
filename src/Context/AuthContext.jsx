import { createContext , useContext } from "react"


const AuthContext = ({children}) => {
  return (
    <div>
        {children} 
    </div>
  )
}

export default AuthContext