import Input from "../../../ui/Input/Input";
import ChatItem from "../../ChatItem/ChatItem";
import styles from "./ChatList.module.scss";

const mockChats = [
  {
    "id": "chat-1",
    "name": "Катя",
    "avatar": undefined,
    "lastMessage": "Hello, how are you?",
    "lastMessageTime": "12:00:00Z",
    "lastMessageAuthor": "John Doe",
    "isGroupChat": false
  },
  {
    "id": "chat-2",
    "name": "Ярослав",
    "avatar": undefined,
    "lastMessage": "I've finished the task",
    "lastMessageTime": "09:30:00Z",
    "lastMessageAuthor": "Jane Smith",
    "isGroupChat": false
  },
  {
    "id": "chat-3",
    "name": "ВечеринОчка🎶🎉",
    "avatar": undefined,
    "lastMessage": "I'm having trouble with the software",
    "lastMessageTime": "15:45:00Z",
    "lastMessageAuthor": "Bob Johnson",
    "isGroupChat": true
  },
  {
    "id": "chat-4",
    "name": "New Ideas",
    "avatar": undefined,
    "lastMessage": "I have a new idea lorem for a project",
    "lastMessageTime": "10:15:00Z",
    "lastMessageAuthor": "Alice Brown",
    "isGroupChat": true
  }
]

export default function ChatList() {
  return (
    <div className={styles.chatList}>
      <div className={styles.chatList__wrapper}>
        <div className={styles.chatList__breadcrumbs}>
          <h2>Messages</h2>
          <Input placeholder="Search" />
        </div>

        <div className={styles.chatList__list}>
          {mockChats && mockChats.map((chat, index) => {
            return <ChatItem key={chat.id + index} chat={chat} />
          })}
        </div>
      </div>
    </div>
  )
}
