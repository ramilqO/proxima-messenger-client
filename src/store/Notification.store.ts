import { makeAutoObservable } from 'mobx';

class NotificationStore {
  notifications: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNotification(message: string) {
    this.notifications.push(message);
  }

  clearNotifications() {
    this.notifications = [];
  }
}

export default NotificationStore;
