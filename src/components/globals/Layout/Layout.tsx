import { motion } from 'framer-motion';
import SideMenu from '../SideMenu/SideMenu';
import ChatList from '../pages/ChatList/ChatList';

import styles from './Layout.module.scss';
import Chat from '../Chat/Chat';

export default function Layout() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <motion.div layout className={styles.layout}>
      <SideMenu />
      <ChatList />
      {!isMobile && <Chat />}
    </motion.div>
  );
}
