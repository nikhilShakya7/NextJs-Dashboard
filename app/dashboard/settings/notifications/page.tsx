import React from 'react';
import styles from '../../../style/notification.module.css'
const Notifications = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Notifications</h1>
        <p className={styles.subtitle}>Manage how you receive alerts and updates</p>
      </div>
      
      <div className={styles.preferencesCard}>
        <h2 className={styles.sectionTitle}>Notification Preferences</h2>
        
        <div className={styles.controlGroup}>
          <label className={styles.label}>Email Notifications</label>
          <select className={styles.select}>
            <option>Enable</option>
            <option>Disable</option>
          </select>
          <span className={styles.hint}>Receive important updates via email</span>
        </div>
        
        <div className={styles.controlGroup}>
          <label className={styles.label}>Push Notifications</label>
          <select className={styles.select}>
            <option>Enable</option>
            <option>Disable</option>
          </select>
          <span className={styles.hint}>Get instant alerts on your device</span>
        </div>
        
        <div className={styles.controlGroup}>
          <label className={styles.label}>SMS Notifications</label>
          <select className={styles.select}>
            <option>Enable</option>
            <option>Disable</option>
          </select>
          <span className={styles.hint}>Text messages for urgent matters</span>
        </div>
        
        <button className={styles.saveButton}>Save Preferences</button>
      </div>
    </div>
  );
};

export default Notifications;