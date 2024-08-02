import Head from 'next/head';
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexwave</title>
        <meta name="description" content="Nexwave Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/background.jpg" alt="Background" className={styles.backgroundImage} />
      </main>
    </div>
  );
}
