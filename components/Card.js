import styles from "./Card.module.scss";

export default function Card(props) {
    const { photoSrc, size, orientation, title } = props;
    return (
        <div className={styles["card-container"]}>
            {title && <h2 className={styles.title}>{props.title}</h2>}
            <div className={styles.paragraph}>{props.children}</div>
            {photoSrc && <img className={styles["img-photo"]} src={photoSrc} alt="Photo" srcSet="" />}
            <img className={styles["img-paperclip"]} src="/paper-clip.png" alt="Picture of a paperclip" />
        </div>
    );
}
