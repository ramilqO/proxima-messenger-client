import { makeAutoObservable } from 'mobx';

export interface IMessage {
  id: number;
  chatId: string; // Идентификатор чата
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
  status: 'ok' | 'failed';
}

class MessageStore {
  messages: Record<string, IMessage[]> = {
    'chat-1': [
      {
        id: 1,
        chatId: 'chat-1',
        userId: 'user-1',
        userName: 'Alice',
        userAvatar: 'https://example.com/avatar1.png',
        text: 'Привет, как дела?',
        timestamp: '2024-07-26T10:00:00Z',
        status: 'ok',
      },
      {
        id: 1,
        chatId: 'chat-1',
        userId: 'user-1',
        userName: 'Alice',
        userAvatar: 'https://example.com/avatar1.png',
        text: 'Привет, как дела?',
        timestamp: '2024-07-26T10:00:00Z',
        status: 'ok',
      },
    ],
    'chat-2': [
      {
        id: 1,
        chatId: 'chat-2',
        userId: 'user-1',
        userName: 'Alice',
        userAvatar: 'https://example.com/avatar1.png',
        text: 'Привет, как дела?',
        timestamp: '2024-07-26T10:00:00Z',
        status: 'ok',
      },
    ],
    'chat-3': [], // Пустой чат, в который еще не добавлено сообщений
  }; // Храним сообщения по чатам
  // TODO: ПЕРЕДЕЛАТЬ СТРУКУТУРУ ЭТОГО СТОРА Т.К ВГЛЯДИТ КОСТЫЛЬНО

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
