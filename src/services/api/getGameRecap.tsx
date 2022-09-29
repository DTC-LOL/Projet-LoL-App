import axios from "axios";

interface IResponse {
	success: boolean;
	data?: any;
	error?: any;
}

const getGameRecap = async (gameId: string) => {
	const response: IResponse = {
		success: false
	};

	const game_url = `http://localhost:8000/api/game?uuid=${gameId}`;
	try {
		await axios.get(game_url, {
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
}

export default getGameRecap;