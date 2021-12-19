import Head from "next/head";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Indiana Pizza</title>
        <meta name="description" content="Best Indiana pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Slider/>
    <PizzaList/>
    </div>
  );
}
