import { userInstance } from "../axios/axiosInstance";

export const signup =(value) =>{
    return userInstance.post("/signup",{...value});
};

export const login =(value)=>{
    return userInstance.post("/login",{...value});
};
 

export const shopProduct = async () => {
    try {
      const response = await userInstance.get('http://localhost:8000/shop'); 
      return response.data.shopProduct; 
    } catch (error) {
      console.error('Error fetching shop products:', error.response || error.message || error);
      throw error;
    }
  };