import { CgLogOut } from "react-icons/cg";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  // function clickHandler(){
  //   console.log("hello button is clicked")
  // }

  return (
    <div className="mt-auto">
      {!loading ? (
        <CgLogOut className="w-6 h-6 text-white cursor-pointer" 
          onClick={logout}/>
        // <CgLogOut className="w-6 h-6 text-white cursor-pointer" onClick={clickHandler}/>

      ) : (
        <span className="loading loading-spinner text-neutral"></span>
      )}
    </div>
  )
};

export default LogoutButton;
