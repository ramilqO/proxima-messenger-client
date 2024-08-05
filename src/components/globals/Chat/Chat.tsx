import stylesD from "./ChatDesktop.module.scss";
import stylesM from "./ChatMobile.module.scss";

import { observer } from 'mobx-react-lite';
import ChatSwitcherStore from '../../../store/ChatSwitcher.store';
import { AnimatePresence, motion } from 'framer-motion';
import isMobile from '../../../utils/isMobile';
import { IoArrowBackSharp } from 'react-icons/io5';
import Avatar from '../../ui/Avatar/Avatar';
import UserStore from '../../../store/User.store';
import { RxAvatar } from 'react-icons/rx';
import { IoIosCall, IoIosInformationCircleOutline } from "react-icons/io";
import Message from "../Message/Message";
import { useEffect, useRef } from "react";
import Textarea from "../../ui/Textarea/Textarea";
import { GoPaperclip } from "react-icons/go";


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
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  })


  return <AnimatePresence>
    {
      ChatSwitcherStore.currentChat && (
        <motion.div
          className={stylesM.chatMobile}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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

          <div className={stylesM.chat} ref={scrollableRef}>
            <div className={stylesM.chat__wrapper}>
              <Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} />
              <Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return this.userId === String(UserStore.id)
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} /><Message message={{
                id: 2,
                chatId: "121092",// Идентификатор чата
                userId: "12109",
                userName: "Рамиль Османов",
                userAvatar: "",
                text: "Привет, на днях решил взяться за проект",
                timestamp: "20.07.2024",
                status: 'ok',
                showAvatar: false,
                isSender() {
                  return true;
                }
              }} />
            </div>
          </div>
          <div className={stylesM.textareaContainer}>
            <Textarea placeholder="Сообщение" size="md" rows={1} />
            <GoPaperclip size={20} />
          </div>
        </motion.div>
      )
    }
  </AnimatePresence>
});

export const Chat = () => {
  return isMobile() ? <ChatMobile /> : <ChatDesktop />;
}