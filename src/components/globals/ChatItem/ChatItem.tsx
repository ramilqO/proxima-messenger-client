import { RxAvatar } from "react-icons/rx";
import Avatar from "../../ui/Avatar/Avatar";
import styles from "./ChatItem.module.scss";
import ChatSwitcher from "../../../store/ChatSwitcher.store";
import { useState } from "react";
import Chat from "../Chat/Chat";
import { motion } from "framer-motion";

type TChatItem = {
    id: string;
    name: string;
    avatar?: string;
    lastMessage: string;
    lastMessageTime: string;
    lastMessageAuthor: string;
    whoIsTypingNow?: string;
    isGroupChat: boolean;
}

export default function ChatItem({ chat }: { chat: TChatItem }) {
    const [open, setOpen] = useState(false);

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    return (
        <>
            <div className={styles.chatItem} onClick={() => { ChatSwitcher.setCurrentChat(chat.id); setOpen(!open) }}>
                <div className={styles.chatItem__wrapper}>
                    <div className={styles.chatItem__group}>
                        <div className={styles.chatItem__avatar}>{chat.avatar ? <Avatar size="md" src={chat.avatar} /> : <RxAvatar size={40} color="gray" />}</div>
                        <div>
                            <span className={styles.chatItem__name}>{chat.name}</span>
                            {chat.whoIsTypingNow ?
                                <p className={styles.chatItem__whoIsTyping}>{chat.whoIsTypingNow} печатает...</p> :
                                <p className={styles.chatItem__lastMessage}>
                                    {chat.isGroupChat && <span className={styles.chatItem__lastMessageAuthor}>{chat.lastMessageAuthor}: </span>}
                                    {chat.lastMessage.length >= 60 ? chat.lastMessage.slice(0, 60) + "..." : chat.lastMessage}
                                </p>
                            }
                        </div>
                    </div>

                    <div className={styles.chatItem__group}>
                        <span className={styles.chatItem__time}>{chat.lastMessageTime}</span>
                        {true && <span className={styles.chatItem__unreadMessages}></span>} {/*TODO: сделать этот счётчик на стороне клиента*/}
                    </div>
                </div>
            </div>
            {isMobile && (open && <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.chatItem__chat}><Chat /></motion.div>)}
        </>
    )
}
