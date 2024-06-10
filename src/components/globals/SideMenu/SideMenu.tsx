import { IoMdSettings } from "react-icons/io";
import Avatar from "../../ui/Avatar/Avatar";
import styles from "./SideMenu.module.scss";
import Button from "../../ui/Button/Button";
import { IoLogOutOutline } from "react-icons/io5";

export default function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <div className={styles.sideMenu__wrapper}>
                <div className={styles.sideMenu__group}>
                    <span className="logo"></span>
                    <Avatar size="sm" src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg" />
                </div>
                <div className={styles.sideMenu__group}>
                    <div className={styles.sideMenu__item}><Button background="transparent"><IoMdSettings size={25} color="gray" /></Button></div>
                    <Button background="transparent"><IoLogOutOutline size={25} color="gray" /></Button>
                </div>
            </div>
        </div>
    )
}
