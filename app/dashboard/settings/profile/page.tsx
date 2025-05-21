"use client"
import React from 'react';
import styles from '../../../style/profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Profile Settings</h1>
        <p className={styles.subtitle}>Manage your personal information and appearance</p>
      </div>

      <div className={styles.profileCard}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Profile Picture</h2>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarWrapper}>
              <img 
                src="/pic.svg" 
                alt="Profile" 
                
              />
              <div className={styles.avatarOverlay}>
                <svg className={styles.cameraIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
            </div>
          </div>
          <button className={styles.changePictureBtn}>
            Change Picture
            <svg className={styles.uploadIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </button>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Profile Information</h2>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input 
              type="text" 
              className={styles.input}
              defaultValue="Lional Messi"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input 
              type="email" 
              className={styles.input}
              defaultValue="LMessi@gmail.com"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Bio</label>
            <textarea 
              className={styles.textarea}
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          
          <div className={styles.buttonGroup}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;