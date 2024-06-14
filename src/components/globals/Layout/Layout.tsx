import Chat from "../Chat/Chat";
import SideMenu from "../SideMenu/SideMenu";
import ChatList from "../pages/ChatList/ChatList";

import styles from "./Layout.module.scss";

export default function Layout() {
    return (
        <div className={styles.layout}>
            <SideMenu />
            <ChatList />
            <div className={styles.layout__mobile + " " + styles.layout__mobile_open}>
                <Chat />
            </div>
        </div>
    )
}
