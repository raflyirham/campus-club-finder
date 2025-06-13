import { useEffect, useState } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  const getUserData = async () => {
    return new Promise((resolve, reject) => {
      const userData = localStorage.getItem("userData");
      if (userData) {
        setUserData(JSON.parse(userData));
        resolve(JSON.parse(userData));
      } else {
        setUserData(null);
        reject(new Error("User data not found"));
      }
    });
  };

  const saveUserData = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserData(userData);
  };

  return { userData, saveUserData, getUserData };
};

export default useUserData;
