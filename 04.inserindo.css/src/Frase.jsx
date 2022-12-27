import styles from "./Frase.module.css"

export function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Esse é o componenete de frase</p>
        </div>
    )
}