import React, { useState } from "react";
import {Link} from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const[username,setUsername] = useState("");
  const[password, setPassword] = useState(""); 

  const {loading,login} = useLogin();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(username,password);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-sm shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter username"
                        className="input w-full input-bordered h-10 max-w-xs"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter password"
                        className="input w-full input-bordered h-10 max-w-xs"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <Link to='/signup'   className="text-sm hover:underline hover:text-blue-600 inline-block mt-2">
                    {"Don't"} have an accout?
                </Link>
                <div>
                <button className="btn max-w-xs w-full btn-sm mt-2" disabled={loading}>
                  {
                    loading?(<span className="loading loading-spinner text-neutral"></span>):("Login")
                  }
                </button>
                </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
