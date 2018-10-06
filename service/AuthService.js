import axios from 'axios';
import Alert from 'react-native';
import API from '../constants/Api';
import deviceStorage from '../service/DeviceStorage';

export default class AuthService{
    
    async login(username, password) {
        return axios.post(API.AUTH, 
            {
                username,
                password,
                rememberMe: true
            }
        )
        .then(async (response) => {
            console.log(response.headers.authorization);
            deviceStorage.saveItem('bearer', response.headers.authorization);
            let result = await deviceStorage.getItem('bearer');

            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

