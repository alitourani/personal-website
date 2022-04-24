import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { BlogComponent } from '$components/Blog';

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ali Tourani - Blog</title>
        <meta name="description" content="Ali Tourani - Blog and News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogComponent />
    </div>
  )
}

export default Blog;
