
import styles from "../styles.module.css";

const cancelled = true;

const CSSModulesDemo = () => {

    return <>
        {/* <h3 class={styles.italicsStyle}>Wash the Dishes</h3> */}
        <h3 classList={
            {
                [styles.strike]: cancelled,
                [styles.italicsStyle] : true
            }
        }>Wash the Car</h3>
    </>
}

export default CSSModulesDemo;