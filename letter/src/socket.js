import { io } from 'socket.io-client';


const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://192.168.0.107:5500';

export const socket = io(URL);

