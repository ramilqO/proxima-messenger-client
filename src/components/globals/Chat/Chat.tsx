import { observer } from 'mobx-react-lite';
import styles from "./Chat.module.scss";
import ChatSwitcherStore from '../../../store/ChatSwitcher.store';

export const ChatDesktop = observer(() => {
  return ChatSwitcherStore.currentChat ? (
    <div className={styles.chat}>
      <h1>ID чата: {ChatSwitcherStore.currentChat.id}</h1>
    </div>
  ) : <h1>Выберите чат</h1>
});

export const ChatMobile = observer(() => {
  return ChatSwitcherStore.currentChat && <div>ID чата: {ChatSwitcherStore.currentChat.id}</div>;
});