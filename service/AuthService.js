import axios from 'axios';
import Alert from 'react-native';
import API from '../constants/Api';

export default class AuthService{
    
    login(email, password) {

        console.log(API.AUTH);
        console.log(email, password);
        return axios.post(API.AUTH, 
            {
                username: email,
                password: password,
                rememberMe: true
            }
        )
        .then((response) => {
            console.log(response);
        
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

