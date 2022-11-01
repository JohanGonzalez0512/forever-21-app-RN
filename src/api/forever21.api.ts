import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const forever21Api = axios.create({ baseURL: 'http://gosling-pro.duckdns.org:3000/api' });

forever21Api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }

        config.timeout = 1000 * 5;
        return config;
    }
    
);

export default forever21Api