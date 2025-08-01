
import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
 
function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 flex items-center h-screen justify-center">
     <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to="/login"/>}/>
        <Route path="/login" element={ authUser ?  <Navigate to ="/"/>:<Login/>}/>
        <Route path="/signup" element={ authUser ? <Navigate to ="/"/>:<SignUp/>}/>
        {/* <Route path="/signup" element={<SignUp/>}/> */}
     </Routes>
     <Toaster/>
    </div>
  );
}

export default App;
