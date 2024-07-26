import stylesD from "./ChatDesktop.module.scss";
import stylesM from "./ChatMobile.module.scss";

import { observer } from 'mobx-react-lite';
import ChatSwitcherStore from '../../../store/ChatSwitcher.store';
import { motion } from 'framer-motion';
import isMobile from '../../../utils/isMobile';
import { IoArrowBackSharp } from 'react-icons/io5';
import Avatar from '../../ui/Avatar/Avatar';
import UserStore from '../../../store/User.store';
import { RxAvatar } from 'react-icons/rx';
import { IoIosCall, IoIosInformationCircleOutline } from "react-icons/io";
import Message from "../../ui/Message/Message";

export const ChatDesktop = observer(() => {
  return (
    <div className={stylesD.chat}>
      {ChatSwitcherStore.currentChat ? (
        <div className={stylesD.chat}>
          <h1>ID чата: {ChatSwitcherStore.currentChat.id}</h1>
        </div>
      ) : <h1>Выберите чат desktop!</h1>}
    </div>)
});

export const ChatMobile = observer(() => {
  return ChatSwitcherStore.currentChat && (
    <motion.div
      className={stylesM.chatMobile}
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.2 }}
    >
      <div className={stylesM.info}>
        <div className={stylesM.info__wrapper}>
          <div className={stylesM.info__group}>
            <button className={stylesM.actionBtn} onClick={() => ChatSwitcherStore.currentChat = null}>
              <IoArrowBackSharp size={20} />
            </button>
            {UserStore.avatar ? <Avatar size="md" src={UserStore.avatar} /> : <RxAvatar size={35} />}
            <div className={stylesM.info__group}>
              <span className={stylesM.info__name}>Рамиль Османов</span>
              <span className={stylesM.info__online}>Сегодня, 10:30</span>
            </div>
          </div>
          <div className={stylesM.info__group}>
            <IoIosCall size={20} />
            <IoIosInformationCircleOutline size={20} />
          </div>
        </div>
      </div>

      <div className={stylesM.chat}>
        <div className={stylesM.chat__wrapper}>
          <Message message={{
            id: 2,
            chatId: "121092",// Идентификатор чата
            userId: "12109",
            userName: "Рамиль Османов",
            userAvatar: "",
            text: "Привет, на днях решил взяться за проект",
            timestamp: "20.07.2024",
            status: 'ok'
          }} />
          <Message message={{
            id: 2,
            chatId: "121092",// Идентификатор чата
            userId: "12109",
            userName: "Рамиль Османов",
            userAvatar: "",
            text: "Привет, на днях решил взяться за проект",
            timestamp: "20.07.2024",
            status: 'ok'
          }} /><Message message={{
            id: 2,
            chatId: "121092",// Идентификатор чата
            userId: "12109",
            userName: "Рамиль Османов",
            userAvatar: "",
            text: "Привет, на днях решил взяться за проект",
            timestamp: "20.07.2024",
            status: 'ok'
          }} /><Message message={{
            id: 2,
            chatId: "121092",// Идентификатор чата
            userId: "12109",
            userName: "Рамиль Османов",
            userAvatar: "",
            text: "Привет, на днях решил взяться за проект",
            timestamp: "20.07.2024",
            status: 'ok'
          }} />
        </div>
      </div>
    </motion.div>
  );
});

export const Chat = observer(() => {
  return isMobile() ? <ChatMobile /> : <ChatDesktop />;
})