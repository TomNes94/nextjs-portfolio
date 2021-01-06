import styles from "./ImageOverlay.module.scss";
import Image from "next/image";
export default function ImageOverlay(props) {
    const { src, height, width, url, alt, margin } = props;
    return (
        <div className={styles.container} style={{ margin: margin }}>
            <Image className={styles.image} src={src} height={height} width={width} alt={alt} layout="responsive" />
            <div className={styles.overlay}>
                <a className={styles.link} href={url}>
                    Link to site
                </a>
            </div>
        </div>
    );
}
