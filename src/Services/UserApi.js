import { userInstance } from "../axios/axiosInstance";

export const signup =(value) =>{
    return userInstance.post("/signup",{...value});
};

export const login =(value)=>{
    return userInstance.post("/login",{...value});
};

export const userStatus = () => {
  return userInstance.get("/auth/status").then((response) => response.data).catch((error) => {
    console.log("Error fetching user status : ", error);
    return { user : null};
  });
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
  export const childProduct = async () => {
    try {
      const response = await userInstance.get('http://localhost:8000/child'); 
      console.log('Full API response data:', response.data);
      return response.data.shopProduct; 
    } catch (error) {
      console.error('Error fetching shop products:', error.response || error.message || error);
      throw error;
    }
  };
  

 
export const adultProduct = async () => {
  try {
    const response = await userInstance.get('http://localhost:8000/adult'); 
    console.log('Full API response data:', response.data);
    return response.data.shopProduct; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};


export const getProductDetails = (productId) => {
  return userInstance.get(`/shop/${productId}`);
};
