import { createContext, useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";
import { verifyToken } from "../utils/verifyToken";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // global
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password, navigate, from) => {
    setLoading(true);

    try {
      const response = await baseUrl.post(`/auth/login`, {
        id: email,
        password,
      });

      const token = response?.data?.data?.accessToken;
      localStorage.setItem("access-token", token);

      // টোকেন ডিকোড করে ইউজার সেট করা
      const decodedUser = verifyToken(token);

      console.log(decodedUser);

      if (decodedUser) {
        window.alert("Successfully Login!");
        setLoading(false);
        navigate(from, { replace: true });
      }

      setUser(decodedUser);
      localStorage.setItem("user", JSON.stringify(decodedUser));
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error?.response?.data?.message);
      window.alert(error?.response?.data?.message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    // অ্যাপ রিলোড হলে লোকাল স্টোরেজ থেকে ইউজার লোড
    const storedUser = localStorage.getItem("user");
    setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    setUser,
    loginUser,
    logoutUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
