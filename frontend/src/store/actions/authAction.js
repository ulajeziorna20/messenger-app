import axios from 'axios'

export const userRegister = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const response = await axios.post('/api/messenger/user-register', data, config)

            console.log(response.data);
        }
        catch (error) {
            console.log(error.response.data);
        }
    }
}  