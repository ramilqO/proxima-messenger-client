import Avatar from "../../ui/Avatar/Avatar";
import styles from "./SideMenu.module.scss";

export default function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <div className={styles.sideMenu__wrapper}>
                <div className={styles.sideMenu__group}>
                    <span className="logo"></span>
                    <Avatar size="md" src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg" />
                </div>
                <div className={styles.sideMenu__group}>
                    <h1>ZDAROVA</h1>
                </div>
            </div>
        </div>
    )
}
