import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";

//its not async function
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await res.json();
      if (!data) {
        throw new Error(data.error);
      }

      //remove from local storage
      localStorage.removeItem("chat-user");
      //set AuthUser to null
      setAuthUser(null);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
