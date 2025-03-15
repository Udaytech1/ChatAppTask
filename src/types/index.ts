export interface User {
  username: string;
  id?: string;
}

export interface Room {
  id: string;
  name: string;
  createdBy: string;
}

export interface Message {
  id: string;
  content: string;
  username: string;
  roomId: string;
  timestamp: string;
}

export interface WebSocketMessage {
  event: 'message' | 'join' | 'leave';
  content: string;
  username?: string;
}

export type NavigationParams = {
  SetUsername: undefined;
  RoomsList: { username: string };
  CreateRoom: { username: string };
  ChatRoom: { roomId: string; roomName: string; username: string };
}; 