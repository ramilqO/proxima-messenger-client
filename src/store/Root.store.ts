import { makeAutoObservable } from 'mobx';
import MessageStore from './Message.store.ts';
import ChatStore from './Chat.store.ts';
import WebSocketStore from './WebSocket.store.ts';
import NotificationStore from './Notification.store.ts';

class RootStore {
  messageStore: MessageStore;
  chatStore: ChatStore;
  webSocketStore: WebSocketStore;
  notificationStore: NotificationStore;

  constructor() {
    this.messageStore = new MessageStore();
    this.chatStore = new ChatStore(this.messageStore);
    this.webSocketStore = new WebSocketStore(this.messageStore);
    this.notificationStore = new NotificationStore();
    makeAutoObservable(this);
  }
}

export default RootStore;
