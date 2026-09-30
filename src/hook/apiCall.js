import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT+ `sendverification` ;

export const apiEmailSend = async (  message) => {
    const options = {
        method: "POST",
        url: API_ENDPOINT,
        data: JSON.stringify({
            to: "ischeduleca@gmail.com",
            subject:`New Customer Demo Alert`,
            message,
        }),
            headers: 
        {
            "Content-Type": "application/json",
        }
    };
    try {  
        return await axios.request(options);
    } catch (error) {
        return error;
    }
};
