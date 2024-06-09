import Input from "../../../ui/Input/Input";
import styles from "./ChatList.module.scss";

export default function ChatList() {
  return (
    <div className={styles.chatList}>
      <div className={styles.chatList__wrapper}>
        <div className={styles.chatList__breadcrumbs}>
          <h2>Messages</h2>
          <Input placeholder="Search" />
        </div>
      </div>
    </div>
  )
}
