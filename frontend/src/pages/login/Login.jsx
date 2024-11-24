import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-sm shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter username"
                        class="input w-full input-bordered h-10 max-w-xs"
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter password"
                        class="input w-full input-bordered h-10 max-w-xs"
                    />
                </div>
                <a href="#" className="text-sm hover:underline hover:text-blue-600 inline-block mt-2">
                    {"Don't"} have an accout?
                </a>
                <div>
                <button className="btn max-w-xs w-full btn-sm mt-2">
                    Login
                </button>
                </div>



        </form>
      </div>
    </div>
  );
};

export default Login;
