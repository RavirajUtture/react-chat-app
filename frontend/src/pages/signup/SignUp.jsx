import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import {Link} from "react-router-dom"
import useSignup from "../../hooks/useSignup";



const SignUp = () => {

    const[Inputs,setInputs] = useState({
        fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
    });

    const {loading,signup} = useSignup();

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log("Your input data is : ");
        // console.log(Inputs);
        signup(Inputs);
    }

    const handleCheckboxChange = (gender)=>{
        setInputs({...Inputs,gender});
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-sm shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl text-center font-semibold text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
    
        <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="input w-full input-bordered h-10 max-w-xs"
                        value={Inputs.fullName}
                        onChange={(e)=>setInputs({...Inputs,fullName:e.target.value})}
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="input w-full input-bordered h-10 max-w-xs"
                        value={Inputs.username}
                        onChange={(e)=>setInputs({...Inputs,username:e.target.value})}
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
                        value={Inputs.password}
                        onChange={(e)=>setInputs({...Inputs,password:e.target.value})}
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Confirm Password"
                        className="input w-full input-bordered h-10 max-w-xs"
                        value={Inputs.confirmPassword}
                        onChange={(e)=>setInputs({...Inputs,confirmPassword:e.target.value})}
                    />
                </div>

                {/* GenderComponent */}
                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={Inputs.gender}/>

                <Link to="/login" className="text-sm hover:underline hover:text-blue-500 inline-block">
                    Already have an account?
                </Link>

                <div>
                <button className="btn max-w-xs w-full btn-sm mt-2" disabled={loading}>
                    {
                        loading?(<span className="loading loading-spinner text-neutral"></span>):("SignUp")
                    }
                </button>
                </div>




        </form>
      </div>
    </div>
  );
};

export default SignUp;
