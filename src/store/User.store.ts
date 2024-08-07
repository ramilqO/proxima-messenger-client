import { makeAutoObservable, runInAction } from 'mobx';
import { IChatItem } from '../components/globals/ChatItem/ChatItem';

interface UserData {
  id: number;
  name: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
  chats: IChatItem[];
}

class UserStore {
  id: number | string = '';
  name: string = '';
  email: string = '';
  avatar: string = '';
  isLoggedIn: boolean = false;
  chats: IChatItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  login(userData: UserData) {
    runInAction(() => {
      this.id = userData.id;
      this.name = userData.name;
      this.email = userData.email;
      this.avatar = userData.avatar;
      this.isLoggedIn = true;
      this.chats = userData.chats;
    });
  }

  logout() {
    localStorage.removeItem('userData');
    runInAction(() => {
      this.isLoggedIn = false;
    });
  }

  updateProfile(updatedData: Partial<UserData>) {
    runInAction(() => {
      this.name = updatedData.name || this.name;
      this.email = updatedData.email || this.email;
      this.avatar = updatedData.avatar || this.avatar;
    });
  }
}

export default new UserStore();
