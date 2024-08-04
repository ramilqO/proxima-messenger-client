import styles from "./Message.module.scss";
import { IMessage } from "../../../store/Message.store";
import Avatar from "../../ui/Avatar/Avatar";

interface IMessageUI extends IMessage {
    showAvatar: boolean;
}

export default function Message({ message }: { message: IMessageUI }) {
    return (
        <div className={styles.message}>
            <div className={styles.message__wrapper}>
                <div className={styles.message__avatar}>
                    {message.showAvatar && <Avatar size="ex-sm" src={"https://w-dog.ru/wallpapers/16/18/497909214965375/nejtiri-navi-avatar.jpg"} />}
                </div>
                <div className={styles.message__content}>
                    <div className={styles.message__text}>{message.text}</div>
                </div>
            </div>
        </div>
    )
}
