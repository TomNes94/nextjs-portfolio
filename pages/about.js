import Header from "../components/Header";
import Card from "../components/Card";
import Head from "next/head";

import styles from "../styles/About.module.scss";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tom van Nes - Web developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This is the about page of Tom van Nes - junior web developer." />
                <meta name="robots" content="index, follow" />
                <meta charSet="UTF-8" />
            </Head>
            <Header />

            <main className={styles.main}>
                <h1>About me</h1>
                <div className={styles.subsection}>
                    <div className={styles["card-container"]}>
                        <Card title="" size="small ">
                            <p>
                                Work as a hobby: my career in a nutshell. Since 2 years I do front- and backend programming at ValueMetrics. I make the UI do
                                what functionally should do. Preferably NodeJS, Vue.js, and Typescript. I try do so by learning something new everyday.
                            </p>
                        </Card>
                    </div>

                    <div className={styles["card-container"]}>
                        <Card title="Skills" size="small">
                            <div className={styles["horizontal-card"]}>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Typescript/ES6</li>
                                    <li>SQL Server/PostgreSQL</li>
                                </ul>
                                <ul>
                                    <li>VueJS</li>
                                    <li>HTML5/(S)CSS</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>Tom van Nes ©</p>
            </footer>
        </div>
    );
}
