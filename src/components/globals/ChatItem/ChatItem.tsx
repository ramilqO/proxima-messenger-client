import { RxAvatar } from 'react-icons/rx';
import Avatar from '../../ui/Avatar/Avatar';
import styles from './ChatItem.module.scss';
import ChatSwitcher from '../../../store/ChatSwitcher.store';

export type TChatItem = {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  lastMessageAuthor: string;
  whoIsTypingNow?: string;
  isGroupChat: boolean;
};

export default function ChatItem({ chat }: { chat: TChatItem }) {
  // const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <>
      <div
        className={styles.chatItem}
        onClick={() => {
          ChatSwitcher.setCurrentChat(chat.id);
        }}
      >
        <div className={styles.chatItem__wrapper}>
          <div className={styles.chatItem__group}>
            <div className={styles.chatItem__avatar}>
              {chat.avatar ? <Avatar size='md' src={chat.avatar} /> : <RxAvatar size={40} color='gray' />}
            </div>
            <div>
              <span className={styles.chatItem__name}>{chat.name}</span>
              {chat.whoIsTypingNow ? (
                <p className={styles.chatItem__whoIsTyping}>{chat.whoIsTypingNow} печатает...</p>
              ) : (
                <p className={styles.chatItem__lastMessage}>
                  {chat.isGroupChat && (
                    <span className={styles.chatItem__lastMessageAuthor}>{chat.lastMessageAuthor}: </span>
                  )}
                  {chat.lastMessage.length >= 60 ? chat.lastMessage.slice(0, 60) + '...' : chat.lastMessage}
                </p>
              )}
            </div>
          </div>

          <div className={styles.chatItem__group}>
            <span className={styles.chatItem__time}>{chat.lastMessageTime}</span>
            {true && <span className={styles.chatItem__unreadMessages}></span>}{' '}
            {/*TODO: сделать этот счётчик на стороне клиента*/}
          </div>
        </div>
      </div>
    </>
  );
}
