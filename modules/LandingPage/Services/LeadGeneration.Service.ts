import {AxiosRequestConfig, AxiosResponse, Method} from 'axios'
import axiosInstance from '@root/utils/axiosInstance';
import { data } from '../Types/Lead.Types';

const path = '/lead'

export const postLead = async (data:data) => {
    try {
        const options: AxiosRequestConfig = {
      method: 'POST' as Method,
      url: path,
      data
    };

    const response: AxiosResponse =
      await axiosInstance.request(options);

    return response.data; 
    } catch (error) {
        throw error;
    }
}