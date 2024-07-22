import { makeAutoObservable } from 'mobx';

export interface IMessage {
  id: number;
  chatId: string; // Идентификатор чата
  name: string;
  avatar: string;
  text: string;
  timestamp: string;
  status: 'ok' | 'failed';
}

class MessageStore {
  messages: Record<string, IMessage[]> = {}; // Храним сообщения по чатам

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(message: IMessage) {
    if (!this.messages[message.chatId]) {
      this.messages[message.chatId] = []; // Инициализируем массив, если его нет
    }
    // Проверяем, есть ли сообщение уже в массиве
    if (!this.messages[message.chatId].find(msg => msg.id === message.id)) {
      this.messages[message.chatId].push(message); // Добавляем сообщение в массив чата
      this.saveMessagesToStorage(message.chatId); // Сохраняем изменения в localStorage
    }
  }

  getMessagesByChatId(chatId: string): IMessage[] {
    return this.messages[chatId] || []; // Возвращаем сообщения для конкретного чата
  }

  loadMessagesFromStorage(chatId: string) {
    const messagesFromStorage = localStorage.getItem(`messages_${chatId}`);
    if (messagesFromStorage) {
      this.messages[chatId] = JSON.parse(messagesFromStorage);
    }
  }

  saveMessagesToStorage(chatId: string) {
    localStorage.setItem(`messages_${chatId}`, JSON.stringify(this.messages[chatId] || []));
  }
}

export default MessageStore;
