import { useEffect } from "react";
import baseUrl from "../../api/baseUrl";

const Home = () => {
  useEffect(()=>{
    const token = localStorage.getItem("access-token");
    const user = async ()=> {
      const res = await baseUrl.get(`/users/me`, {
        headers: {
          Authorization: `${token}`,
        },
      });
    }
    user()
  }, [])
  return (
    <>
     Home
    </>
  );
};

export default Home;
