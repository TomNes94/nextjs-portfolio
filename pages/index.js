import Header from "../components/Header";
import Card from "../components/Card";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tom van Nes - Web developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This is the portfolio home page of Tom van Nes - junior web developer." />
                <meta name="robots" content="index, follow" />
                <meta charSet="UTF-8" />
            </Head>
            <Header />

            <main className={styles.main}>
                <Card title="Hi!" photoSrc="/photo.jpg" size="small">
                    <p>
                        My name is Tom van Nes. I am a web developer working at ValueMetrics. Creating web application backends and supporting user interfaces
                        is what I do.
                    </p>
                </Card>
            </main>

            <footer className={styles.footer}>
                <p>Tom van Nes © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}
