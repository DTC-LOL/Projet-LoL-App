import axios from "axios";
import getApiUrl from "./getApiUrl";

interface IResponse {
	success: boolean;
	data?: any;
	error?: any;
}

/**
 * Get game recap
 * @param gameId 
 * @returns 
 */
const getGameRecap = async (gameId: string) => {
	const response: IResponse = {
		success: false
	};
	
	const game_url = getApiUrl() + 'game?uuid=' + gameId;
	
	
	try {
		await axios.get(game_url, {
			headers: {
				'content-type': 'application/json',
			}
		}).then(res => {
			response['success'] = true;

			response['data'] = res.data;

		}).catch(err => {
			response['error'] = err.message;
		});
	} catch (err: any) {
		response['error'] = err.message;
	}
	return response;
}

export default getGameRecap;