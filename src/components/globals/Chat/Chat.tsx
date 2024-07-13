import { observer } from "mobx-react-lite";
import ChatSwitcher from "../../../store/ChatSwitcher.store";
import styles from "./Chat.module.scss"
import { motion } from "framer-motion";
import { Suspense } from "react";

const Chat = observer(() => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} className={styles.chat}>
      <div className={styles.chat__wrapper}>
        <h1>I am a chat</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <h2>{ChatSwitcher.currentChat?.title}</h2>
        </Suspense>
      </div>
    </motion.div>
  )
})

export default Chat;
