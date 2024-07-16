import { makeAutoObservable } from 'mobx';
import io, { Socket } from 'socket.io-client';

export interface IMessage {
  id: number;
  name: string;
  avatar: string;
  text: string;
  timestamp: string;
  status: 'ok' | 'failed';
}

class ChatStore {
  messages: IMessage[] = [];
  isConnected = false;
  socket: Socket | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initSocket();
  }

  initSocket() {
    this.socket = io('http://your-websocket-server.com');

    this.socket.on('connect', () => {
      this.isConnected = true;
    });

    this.socket.on('disconnect', () => {
      this.isConnected = false;
    });

    this.socket.on('message', message => {
      this.addMessage(message);
    });

    this.socket.on('error', error => {
      console.error('Socket.IO error:', error);
    });
  }

  addMessage(message: IMessage) {
    this.messages = [...this.messages, message];
  }

  sendMessage(message: IMessage) {
    this.socket?.emit('message', message);
  }

  connect() {
    if (!this.socket || !this.socket.connected) {
      this.initSocket();
    }
  }

  disconnect() {
    if (this.socket && this.socket.connected) {
      this.socket.disconnect();
    }
  }
}

export default ChatStore;
