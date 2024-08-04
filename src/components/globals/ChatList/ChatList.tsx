// import { getChats } from "../../../../utils/getChats";
import { IoIosSearch } from 'react-icons/io';
import Input from '../../ui/Input/Input';
import ChatItem from '../ChatItem/ChatItem';
import styles from './ChatList.module.scss';

const mockChats = [
  {
    id: '16', // ссылка для динамического роутинга
    name: 'Катя',
    avatar: undefined,
    lastMessage: 'Hello, how are you?',
    lastMessageTime: '12:00:00Z',
    lastMessageAuthor: 'John Doe',
    isGroupChat: false,
    isFixed: false, // закреплен ли чат
  },
  {
    id: '11',
    name: 'Ярослав',
    avatar: undefined,
    lastMessage: "I've finished the task",
    lastMessageTime: '09:30:00Z',
    lastMessageAuthor: 'Jane Smith',
    isGroupChat: false,
    isFixed: false,
  },
  {
    id: '2',
    name: 'ВечеринОчка🎶🎉',
    avatar: undefined,
    lastMessage: "I'm having trouble with the software",
    lastMessageTime: '15:45:00Z',
    lastMessageAuthor: 'Bob Johnson',
    isGroupChat: true,
    isFixed: true,
  },
  {
    id: '20',
    name: 'New Ideas',
    avatar: undefined,
    lastMessage: 'I have a new idea lorem for a project',
    lastMessageTime: '10:15:00Z',
    lastMessageAuthor: 'Alice Brown',
    isGroupChat: true,
    isFixed: true,
  },
  {
    id: '16', // ссылка для динамического роутинга
    name: 'Катя',
    avatar: undefined,
    lastMessage: 'Hello, how are you?',
    lastMessageTime: '12:00:00Z',
    lastMessageAuthor: 'John Doe',
    isGroupChat: false,
    isFixed: false, // закреплен ли чат
  },
  {
    id: '11',
    name: 'Ярослав',
    avatar: undefined,
    lastMessage: "I've finished the task",
    lastMessageTime: '09:30:00Z',
    lastMessageAuthor: 'Jane Smith',
    isGroupChat: false,
    isFixed: false,
  },
  {
    id: '2',
    name: 'ВечеринОчка🎶🎉',
    avatar: undefined,
    lastMessage: "I'm having trouble with the software",
    lastMessageTime: '15:45:00Z',
    lastMessageAuthor: 'Bob Johnson',
    isGroupChat: true,
    isFixed: true,
  },
  {
    id: '20',
    name: 'New Ideas',
    avatar: undefined,
    lastMessage: 'I have a new idea lorem for a project',
    lastMessageTime: '10:15:00Z',
    lastMessageAuthor: 'Alice Brown',
    isGroupChat: true,
    isFixed: true,
  },
  {
    id: '16', // ссылка для динамического роутинга
    name: 'Катя',
    avatar: undefined,
    lastMessage: 'Hello, how are you?',
    lastMessageTime: '12:00:00Z',
    lastMessageAuthor: 'John Doe',
    isGroupChat: false,
    isFixed: false, // закреплен ли чат
  },
  {
    id: '11',
    name: 'Ярослав',
    avatar: undefined,
    lastMessage: "I've finished the task",
    lastMessageTime: '09:30:00Z',
    lastMessageAuthor: 'Jane Smith',
    isGroupChat: false,
    isFixed: false,
  },
  {
    id: '2',
    name: 'ВечеринОчка🎶🎉',
    avatar: undefined,
    lastMessage: "I'm having trouble with the software",
    lastMessageTime: '15:45:00Z',
    lastMessageAuthor: 'Bob Johnson',
    isGroupChat: true,
    isFixed: true,
  },
  {
    id: '20',
    name: 'New Ideas',
    avatar: undefined,
    lastMessage: 'I have a new idea lorem for a project',
    lastMessageTime: '10:15:00Z',
    lastMessageAuthor: 'Alice Brown',
    isGroupChat: true,
    isFixed: true,
  },
];

const ChatList = () => {
  return (
    <div className={styles.chatList}>
      <div className={styles.chatList__wrapper}>
        <div className={styles.chatList__breadcrumbs}>
          <h2>Сообщения</h2>
          <Input placeholder='Search' size='sm' icon={<IoIosSearch size={25} color='gray' />
          } />
        </div>

        <div className={styles.chatList__list}>
          {mockChats &&
            mockChats.map((chat, index) => {
              return <ChatItem key={chat.id + index} chat={chat} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
