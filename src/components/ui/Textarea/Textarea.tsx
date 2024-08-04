import styles from "./Textarea.module.scss";

interface ITextarea {
    placeholder: string;
    size: "sm" | "md" | "lg";
    rows: number;
}

export default function Textarea({ placeholder, size, rows }: ITextarea) {
    return (
        <div className={styles.textarea + ' ' + styles[size]}>
            <textarea 
            placeholder={placeholder} 
            rows={rows} 
            spellCheck
            className={styles.textarea__elem + " " + styles[size]} />
        </div>
    )
}
