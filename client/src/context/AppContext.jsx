import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const  AppContextProvider =({children}) =>{
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
const navigate = useNavigate()
  const [credit, setCredit] = useState(false);



  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  function logOut(){
    localStorage.removeItem("token")
    setToken("")
    setUser(null)
  }
   const loadCreditData = useCallback(async () => {
    if (!token) return;

   
    try {
      const {data}  = await axios.get(`${backendUrl}/api/user/credit`, {
        headers: {token}, 
      });

      if (data.success) {
          setCredit(data.credit);
          setUser(data.user);
        }
    } catch (error) {
        console.error("Failed to load credit data:", error);
        toast.error("Failed to load credit data.");
    }
}, [token, backendUrl]);
async function generateImage(prompt) {
    try {
        const {data}=  await axios.post(`${backendUrl}/api/image/generate-image`, {prompt},{headers:{token}})
        if(data.success){
            loadCreditData()
            console.log(data)
            return data.resultIamge
        }
        else{
            
            toast.error(data.message);
            loadCreditData()
            if(data.creditBalance <= 0) {navigate("/credit")}
        }
    } catch (error) {
        toast.error(error.message);
        
    }
}

  useEffect(()=>{
if(token){
   
    loadCreditData()
}
  },[token,loadCreditData])
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditData,
    logOut,
    generateImage
  };
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}
