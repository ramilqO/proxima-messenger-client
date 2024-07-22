import { makeAutoObservable } from 'mobx';
import MessageStore, { IMessage } from './Message.store.ts';

class ChatStore {
  messageStore: MessageStore;
  isConnected = false;

  constructor(messageStore: MessageStore) {
    this.messageStore = messageStore;
    makeAutoObservable(this);
  }

  getMessagesByChatId(chatId: string): IMessage[] {
    return this.messageStore.getMessagesByChatId(chatId);
  }

  loadMessages(chatId: string) {
    this.messageStore.loadMessagesFromStorage(chatId);
  }
}

export default ChatStore;
