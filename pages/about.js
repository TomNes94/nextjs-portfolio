import Header from "../components/Header";
import Card from "../components/Card";
import Head from "next/head";
import { Chrono } from "react-chrono";
import styles from "../styles/About.module.scss";

export default function About() {
  const items = [
    {
      title: "Sep 2012 - Apr 2016",
      cardTitle: "Bsc Economics and Business Economics",
      cardSubtitle: "Rijksuniversiteit Groningen",
    },
    {
      title: "Sep 2016 - Feb 2018",
      cardTitle: "MSc Economics",
      cardSubtitle: "Rijksuniversiteit Groningen",
    },
    {
      title: "Sep 2017 - Apr 2020",
      cardTitle: "MSc Real Estate Studies",
      cardSubtitle: "Rijksuniversiteit Groningen",
    },
    {
      title: "Sep 2018 - Jun 2021",
      cardTitle: "Web Developer",
      cardSubtitle: "ValueMetrics B.V.",
    },
    {
      title: "Jul 2021 - Feb 2022",
      cardTitle: "Fullstack Javascript Developer",
      cardSubtitle: "LINKIT B.V.",
    },
    {
      title: "Mar 2022 - Current",
      cardTitle: "Fullstack Developer",
      cardSubtitle: "EatMyRide B.V.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Tom van Nes - Web developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="This is the about page of Tom van Nes - web developer."
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>
      <Header />

      <main className={styles.main}>
        <h1>About me</h1>
        <div className={styles.subsection}>
          <div className={styles["card-container"]}>
            <Card size="large">
              <p>
                I am Tom van Nes, living in Utrecht for a few years now. What
                started as hobby is now an amazing day job: since 3 years I do
                front- and backend programming professionally. I make a UI do
                what it functionally should do. Preferably NodeJS, Vue.js, and
                Typescript. I try do so by learning something new everyday.
              </p>
              <p>
                Off-screen I like to play soccer, over-the-top cooking and am
                proud indoor gardener.
              </p>
            </Card>
            <Card title="Skills" size="large">
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
          <div className={styles["card-container"]}>
            <img
              className={styles["personal-image"]}
              src="/personal_photo.jpg"
              alt="Photo of me"
            />
          </div>
        </div>
        <div className={styles["card-container"]}>
          <Card size="medium" margin="my">
            <Chrono
              style={{ fontSize: "10px!important" }}
              items={items}
              mode="VERTICAL"
              hideControls={true}
              theme={{
                primary: "black",
                secondary: "transparent",
                cardBgColor: "white",
                cardForeColor: "black",
              }}
            />
          </Card>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>{`Tom van Nes © ${new Date().getFullYear()}`}</p>
      </footer>
    </div>
  );
}
