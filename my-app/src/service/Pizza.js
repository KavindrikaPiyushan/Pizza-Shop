import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pizzas';

export const getAllPizzas = async(req, res)=>{
    try{
         const response = await axios.get(API_URL);
         return response.data;
    }
    catch(error){
        console.log(error);
    }
}