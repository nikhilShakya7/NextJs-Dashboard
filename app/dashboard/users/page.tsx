import React from 'react';
import Link from 'next/link';
import styles from '../../style/users.module.css'
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Users</h1>
        <p className={styles.subtitle}>Manage your users and their permissions</p>
      </div>

      <div className={styles.userCards}>
        <Link href="/dashboard/users/user-details" className={styles.userCard}>
          <div className={styles.cardContent}>
            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 11L19 13L23 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className={styles.cardTitle}>User Details</h2>
            <p className={styles.cardDescription}>View and manage all user information</p>
            <div className={styles.cardHover}>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>

        <Link href="/dashboard/users/user-list" className={styles.userCard}>
          <div className={styles.cardContent}>
            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3016 19.227 15.6362 19.2863 15.9606C19.3456 16.285 19.5009 16.5783 19.7276 16.7906C20.6649 17.6425 21.2059 18.8251 21.2059 20.0583C21.2059 20.3068 21.0074 20.5053 20.7589 20.5053H3.24112C2.99262 20.5053 2.79412 20.3068 2.79412 20.0583C2.79412 18.8251 3.33517 17.6425 4.27241 16.7906C4.49913 16.5783 4.65437 16.285 4.71369 15.9606C4.773 15.6362 4.73308 15.3016 4.60001 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 3.6084C10.4931 3.56071 10.9931 3.5354 11.5 3.5354C12.0069 3.5354 12.5069 3.56071 13 3.6084" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.91797 8.15662C4.99397 7.72662 6.15697 7.46462 7.36497 7.40362" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.635 7.40362C17.843 7.46462 19.006 7.72662 20.082 8.15662" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className={styles.cardTitle}>User Lists</h2>
            <p className={styles.cardDescription}>View User Lists</p>
            <div className={styles.cardHover}>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>

        <Link href="/dashboard/users/user-details" className={styles.userCard}>
          <div className={styles.cardContent}>
            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className={styles.cardTitle}>User Details</h2>
            <p className={styles.cardDescription}>View user information</p>
            <div className={styles.cardHover}>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Users;