import { makeAutoObservable } from 'mobx';
import io, { Socket } from 'socket.io-client';
import MessageStore, { IMessage } from './Message.store.ts';

class WebSocketStore {
  socket: Socket | null = null;
  messageStore: MessageStore;

  constructor(messageStore: MessageStore) {
    this.messageStore = messageStore;
    makeAutoObservable(this);
    this.initSocket();
  }

  initSocket() {
    this.socket = io('http://your-websocket-server.com');

    this.socket.on('connect', () => {
      console.log('Я подключился к websocket серверу');
    });

    this.socket.on('disconnect', () => {
      console.log("Я отключился от websocket сервера");
    });

    this.socket.on('message', (message: IMessage) => {
      this.messageStore.addMessage(message);
      this.showNotification(message);
    });

    this.socket.on('error', error => {
      console.error('Socket.IO error:', error);
    });
  }

  showNotification(message: IMessage) {
    console.log(`Новое сообщение от ${message.name} в чате ${message.chatId}: ${message.text}`);
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

export default WebSocketStore;