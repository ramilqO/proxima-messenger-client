import { Chat } from '../Chat/Chat';
import SideMenu from '../SideMenu/SideMenu';
import ChatList from '../ChatList/ChatList';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <ChatList />
      <Chat />
    </div>
  );
}
