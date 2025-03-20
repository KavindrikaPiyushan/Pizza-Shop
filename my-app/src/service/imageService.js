const API_BASE_URL = 'http://localhost:5000/api';
import axios from 'axios';

export const getImagesFromFolder = async (folder)=>{
    try{
        const response = await  axios.get(`http://localhost:5000/api/images/get-images`,{
            params:{folder:folder},
        });
        console.log('response',response);
        return response.data;
    }catch(error){
        console.error('Error fetching images:', error);
        throw error;
    }
};