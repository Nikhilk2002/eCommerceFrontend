import { adminInstance } from "../axios/axiosInstance";



export const login = (value) => {
  
    return adminInstance.post("/login", {...value});
};

export const Products = (value) => {
  return adminInstance.post("/add", {...value});
}

//Get Methods
export const userList =()=>{
  return adminInstance.get("/user")
};




export const removeUser = (userId) => {
  return adminInstance.delete(`/user/${userId}`);
};