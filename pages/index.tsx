import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { HomeComponent } from '$components/Home';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ali Tourani - Home</title>
        <meta name="description" content="Ali Tourani - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </div>
  )
}

export default Home;
