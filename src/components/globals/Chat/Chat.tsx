import { observer } from "mobx-react-lite";
import ChatSwitcher from "../../../store/ChatSwitcher.store";
import styles from "./Chat.module.scss"

const Chat = observer(() => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__wrapper}>
        <h1>I am a chat</h1>
        <h2>{ChatSwitcher.currentChat?.title}</h2>
      </div>
    </div>
  )
})

export default Chat;
