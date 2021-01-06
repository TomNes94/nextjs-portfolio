import styles from "./Card.module.scss";

export default function Card(props) {
    const { photoSrc, size, orientation, title } = props;
    return (
        <div className={`${styles["card-container"]} ${size && styles[`card-${size}`]}`}>
            {title && <h2 className={styles.title}>{props.title}</h2>}
            <div className={styles.paragraph}>{props.children}</div>
            {photoSrc && <img className={styles["img-photo"]} src={photoSrc} alt="Photo" srcSet="" />}
        </div>
    );
}
