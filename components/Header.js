import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles["header-section"]}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </div>
            <div className={styles["header-section"]}>
                <a href="https://www.linkedin.com/in/tom-van-nes-5523a512a/">
                    <img
                        className={styles["img-logo"]}
                        src="/pngkit_linkedin-icon-png_85849.png"
                        alt="Linkedin logo"
                    />
                </a>
                <a href="https://github.com/tomnes94">
                    <img
                        className={styles["img-logo"]}
                        src="/GitHub-Mark-32px.png"
                        alt="Github logo"
                    />
                </a>
            </div>
        </header>
    );
}
