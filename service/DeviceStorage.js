import { AsyncStorage } from 'react-native';

const deviceStorage = {
  
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getItem(key) {
        try {
            let result = await AsyncStorage.getItem(key);
            return result;
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }
};

export default deviceStorage;