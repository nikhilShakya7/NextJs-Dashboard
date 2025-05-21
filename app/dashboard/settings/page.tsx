import React from 'react';
import Link from 'next/link';
import styles from '../../style/Settings.module.css';

const Settings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/dashboard" className={styles.dashboardLink}>
          <svg className={styles.dashboardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20C13 20.5523 13.4477 21 14 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 21H10C10.5523 21 11 20.5523 11 20V16C11 15.4477 10.5523 15 10 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 13H20C20.5523 13 21 12.5523 21 12V4C21 3.44772 20.5523 3 20 3H14C13.4477 3 13 3.44772 13 4V12C13 12.5523 13.4477 13 14 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <h1 className={styles.title}>Settings</h1>
      </div>
      <p className={styles.subtitle}>
        Customize your account settings, profile, and notifications. Choose an option to begin.
      </p>
      <ul className={styles.optionList}>
        <li className={styles.optionItem}>
          <Link href="/dashboard/settings/account" className={styles.link}>
            <span>Account</span>
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </li>
        <li className={styles.optionItem}>
          <Link href="/dashboard/settings/profile" className={styles.link}>
            <span>Profile</span>
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </li>
        <li className={styles.optionItem}>
          <Link href="/dashboard/settings/notifications" className={styles.link}>
            <span>Notifications</span>
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </li>
        <li className={styles.optionItem}>
          <Link href="/dashboard/settings/privacy" className={styles.link}>
            <span>Privacy & Security</span>
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;