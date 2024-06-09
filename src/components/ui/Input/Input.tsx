import styles from "./Input.module.scss";
import { IoIosSearch } from "react-icons/io";

interface IInput {
    placeholder: string;
}

export default function Input({ placeholder }: IInput) {
    return (
        <div className={styles.input}>
            <IoIosSearch size={20} color="gray"/>
            <input type="text" placeholder={placeholder} className={styles.input__elem} />
        </div>
    )
}
