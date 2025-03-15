import axios from 'axios';
import { Room, Message } from '../types';

const BASE_URL = 'https://chat-api-k4vi.onrender.com';

export const api = {
  // User endpoints
  setUsername: async (username: string) => {
    const response = await axios.post(`${BASE_URL}/chat/username`, { username });
    return response.data;
  },

  // Room endpoints
  getRooms: async (): Promise<Room[]> => {
    const response = await axios.get(`${BASE_URL}/chat/rooms`);
    return response.data;
  },

  createRoom: async (name: string, createdBy: string): Promise<Room> => {
    const response = await axios.post(`${BASE_URL}/chat/rooms`, { name, createdBy });
    return response.data;
  },

  // Message endpoints
  getMessages: async (roomId: string): Promise<Message[]> => {
    const response = await axios.get(`${BASE_URL}/chat/rooms/${roomId}/messages`);
    return response.data;
  },

  sendMessage: async (roomId: string, content: string, username: string): Promise<Message> => {
    const response = await axios.post(`${BASE_URL}/chat/rooms/${roomId}/messages`, {
      content,
      username,
    });
    return response.data;
  },
}; 