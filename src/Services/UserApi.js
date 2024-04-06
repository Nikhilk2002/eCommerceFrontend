import { userInstance } from "../axios/axiosInstance";

export const signup =(value) =>{
    return userInstance.post("/signup",{...value});
};

export const login =(value)=>{
    return userInstance.post("/login",{...value});
};