import { makeAutoObservable } from 'mobx';

interface ICurrentChat {
  id: number;
}

class ChatSwitcher {
  currentChat: ICurrentChat | null;
  chatIsOpen: boolean;

  constructor() {
    this.currentChat = null;
    this.chatIsOpen = false;
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  setChatIsOpen() {
    this.chatIsOpen = !this.chatIsOpen;
  }
  setCurrentChat(chatId: string) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${chatId}`)
      .then(res => res.json())
      .then(chat => (this.currentChat = chat));
    console.log(this.currentChat);
  }
}

export default new ChatSwitcher();
