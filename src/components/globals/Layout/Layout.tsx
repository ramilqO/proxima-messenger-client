import { motion } from "framer-motion";
import SideMenu from "../SideMenu/SideMenu";
import ChatList from "../pages/ChatList/ChatList";

import styles from "./Layout.module.scss";

export default function Layout() {
    return (
        <motion.div layout className={styles.layout}>
            <SideMenu />
            <ChatList />
            {/* <Chat /> */}
        </motion.div>
    )
}
