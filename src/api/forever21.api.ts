import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const forever21Api = axios.create({ baseURL: 'http://10.0.2.2:3000/api' });

forever21Api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
    }
    
);

export default forever21Api