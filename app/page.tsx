import React from 'react';
import Link from 'next/link';
import styles from './style/home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Dashboard App</h1>
      <p className={styles.subtitle}>
        Manage your tasks, track analytics and stay organized with our powerful dashboard
      </p>
      <Link href="/dashboard" className={styles.button}>
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
