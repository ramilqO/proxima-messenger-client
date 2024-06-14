import { makeAutoObservable } from 'mobx';

interface ICurrentChat {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class ChatSwitcher {
  currentChat: ICurrentChat | null;

  constructor() {
    this.currentChat = null;
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  setCurrentChat(chatId: string) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${chatId}`)
      .then(res => res.json())
      .then(chat => (this.currentChat = chat));
    console.log(this.currentChat);
  }
}

export default new ChatSwitcher();
