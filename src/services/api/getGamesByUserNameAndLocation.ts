import axios from "axios";

interface IFormData {
    name: FormDataEntryValue | null;
    location: FormDataEntryValue | null;
}

interface IResponse { 
    success: boolean;
    data?: any;
    error?: any;
}

const getGamesByUserNameAndLocation = async (data: IFormData) => {
    const response:IResponse = {
        success: false
    };

    const player_url = `http://localhost:8000/api/player?name=${data.name}&location=${data.location}`;
    try {
        await axios.get(player_url, {
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => {
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