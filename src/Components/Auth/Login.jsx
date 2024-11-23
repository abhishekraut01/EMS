import { useState } from "react";

const Login = ({handleLogin}) => { //handle login came from the app component
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //imported handle login so that we are passing email and password to parent component
    //user input dega and ham idhar se app component mai data pass karengey
    const handleFromSubmit =(e)=>{
        e.preventDefault();
        handleLogin(email , password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2  border-emerald-400 p-20 rounded-3xl">
            <form onSubmit={(e)=>{
                handleFromSubmit(e)
            }} className="flex flex-col">
                <input required className="outline-none border-2 rounded-3xl mb-4  bg-transparent px-5 text-xl py-3 border-emerald-400 placeholder:text-white" type="text" placeholder="Username"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 />

                <input  required className="outline-none mb-4 rounded-3xl  bg-transparent px-5 text-xl py-3 border-2 border-emerald-400 placeholder:text-white" type="password" placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="outline-none rounded-3xl   px-5 text-xl py-3 bg-emerald-400 placeholder:text-white" type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login