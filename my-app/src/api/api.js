import axios from "axios";


const API = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
})

let accessToken = null;

// set access token
export const setAccessToken = (token)=>{
    accessToken= token;
}

//attach token to every requests.
API.interceptors.request.use((config)=>{
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;

    }
    return config;
});


// handle token expiary
API.interceptors.response.use(
    (response) => response,
    async (error) =>{
        if(error.response?.status === 401){
            try{
                const res = await axios.post("http://localhost:5000/api/auth/refresh-token",{},{withCredentials:true});
                setAccessToken(res.data.accessToken); //store new access token
                error.config.headers.Authorization = `Bearer ${res.data.accessToken}`; //add new token to req headers
                return API(error.config); // retry req with new token
            }catch{
                localStorage.removeItem("isLoggedIn");
                window.location.href ="/login" ; //if token fail redirect to login
            }
        }
        return Promise.reject(error); // reject other error 
    }
);

export default API;

