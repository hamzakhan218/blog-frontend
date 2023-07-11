import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //check if user is logged in
  const checkUserLoggedIn = async () => {
    console.log("Check user login");
    try {
      const res = await fetch("http://localhost:9005/api/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
      if (!result.error) {
        setUser(result);
      } else {
        // console.log(result.error);
        toast.error(result.error);
      }
    } catch (error) {}
  };
  //   login request
  const loginUser = async (userData) => {
    try {
      const res = await fetch("http://localhost:9005/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        console.log("Result from login api: ", result);
        localStorage.setItem("token", result.token);
        setUser(result.user);
        toast.success("User Loggen in");
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // register request
  const registerUser = async (userData) => {
    try {
      const res = await fetch("http://localhost:9005/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        toast.success("User is registered. Please Login");
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    (async function checkUser() {
      await checkUserLoggedIn();
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ loginUser, registerUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
