import Header from "../components/Header";
import Card from "../components/Card";
import Head from "next/head";
import ImageOverlay from "../components/ImageOverlay";

import styles from "../styles/Projects.module.scss";

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tom van Nes - Web developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This page shows projects built by Tom van Nes - junior web developer." />
                <meta name="robots" content="index, follow" />
                <meta charSet="UTF-8" />
            </Head>
            <Header />

            <main className={styles.main}>
                <h1>Projects</h1>
                <div className={styles.subsection}>
                    <div className={styles["card-container"]}>
                        <Card title="" size="medium">
                            <ImageOverlay src="/mancala.PNG" height={400} width={800} url="https://mancala.tomvannes.dev" alt="Picture of game" />
                            <p>
                                Mancala is a traditional board game of which a form exists in many countries. I built a version of the game that you can play
                                with friends, against a stranger or against an AI. The frontend is built with VueJS, the backend is NodeJS with ExpressJS using
                                Typescript. Communication is done through SocketIO. The project is hosted at DigitalOcean.
                            </p>
                        </Card>
                        <Card title="" size="medium">
                            <div style={{ display: "flex" }}>
                                <ImageOverlay
                                    src="/app_1.jpg"
                                    height={200}
                                    width={100}
                                    url="https://github.com/TomNes94/estafette-app"
                                    alt="Picture of app"
                                    margin="5%"
                                />
                                <ImageOverlay
                                    src="/app_2.jpg"
                                    height={200}
                                    width={100}
                                    url="https://github.com/TomNes94/estafette-server"
                                    alt="Picture of app"
                                    margin="5%"
                                />
                            </div>
                            <p>
                                Acloop is an app that I made for a student society. The idea was that people could do a relay race, without being near
                                eachother. The app was built using Nativescript Vue, and the backend is built using NodeJS and ExpressJS.
                            </p>
                        </Card>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>Tom van Nes © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}
