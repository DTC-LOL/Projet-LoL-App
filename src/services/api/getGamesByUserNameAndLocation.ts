import axios from "axios";
import getApiUrl from "./getApiUrl";

interface IFormData {
    name: FormDataEntryValue | null;
    location: FormDataEntryValue | null;
}

interface IResponse { 
    success: boolean;
    data?: any;
    error?: any;
}
/**
* This function is used to get the games by username and location
* @param {IFormData} formData - The form data
* @returns {Promise<IResponse>} - The response
*/
const getGamesByUserNameAndLocation = async (data: IFormData) => {
    const response:IResponse = {
        success: false
    };
     
    const player_url = getApiUrl() + `player?name=${data.name}&location=${data.location}`;
    try {
        await axios.get(player_url, {
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => {
            response.success = true;
            response['data'] = res.data;

        }).catch(err => {
            response['error'] = err.message;
        });
    } catch (err: any) {
        response['error'] = err.message;
    }
    return response;
};

export default getGamesByUserNameAndLocation;