import { ChatDesktop, ChatMobile } from '../Chat/Chat';
import SideMenu from '../SideMenu/SideMenu';
import ChatList from '../pages/ChatList/ChatList';

import styles from './Layout.module.scss';

export default function Layout() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className={styles.layout}>
      <SideMenu />
      <ChatList />
      {isMobile ? <ChatMobile /> : <ChatDesktop />}
    </div>
  );
}
