import { makeAutoObservable } from 'mobx';

interface ICurrentChat {
  id: number;
}

class ChatSwitcher {
  currentChat: ICurrentChat | null;

  constructor() {
    this.currentChat = null;
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  setCurrentChat(chatId: string) {
    this.currentChat = { id: +chatId };
    console.log(this.currentChat);
  }
}

export default new ChatSwitcher();
