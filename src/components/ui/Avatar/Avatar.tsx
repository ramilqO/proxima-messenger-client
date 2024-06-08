import styles from './Avatar.module.scss';

interface IAvatar {
    size: "lg" | "md" | "sm";
    src: string
}
export default function Avatar({ size, src }: IAvatar) {
    return (
        <div className={styles.avatar + " " + styles[size]}>
            <div className={styles.avatar__wrapper}>
                <img src={src} alt={"Тут должна была быть аватарка"} className={styles.avatar__img} />
            </div>
        </div>
    )
}
