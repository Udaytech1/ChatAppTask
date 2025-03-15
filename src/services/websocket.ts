import { WebSocketMessage } from '../types';

export class WebSocketService {
  private ws: WebSocket | null = null;
  private messageHandler: ((message: WebSocketMessage) => void) | null = null;

  connect(roomId: string, username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(
        `wss://chat-api-k4vi.onrender.com/ws/${roomId}/${username}`
      );

      this.ws.onopen = () => {
        console.log('WebSocket Connected');
        resolve();
      };

      this.ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (this.messageHandler) {
          this.messageHandler(message);
        }
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
        console.error('WebSocket State:', this.ws?.readyState);
        console.error('Connection URL:', `wss://chat-api-k4vi.onrender.com/ws/${roomId}/${username}`);
        reject(error);
      };

      this.ws.onclose = () => {
        console.log('WebSocket Disconnected');
      };
    });
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  sendMessage(content: string) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const message: WebSocketMessage = {
        event: 'message',
        content,
      };
      console.log('sendMessage', message);
      this.ws.send(JSON.stringify(message));
    }
  }

  onMessage(handler: (message: WebSocketMessage) => void) {
    this.messageHandler = handler;
  }
}

export const websocketService = new WebSocketService(); 