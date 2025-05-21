import React from 'react'
import Link from 'next/link'
import styles from '../style/dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.subtitle}>Welcome Back!</p>
          </div>

          <div className={styles.tasksGrid}>
            <Link href="dashboard/tasks">
              <div className={styles.taskCard}>
                <div className={styles.taskHeader}>
                  <h2 className={styles.taskTitle}>Tasks</h2>
                  <span className={styles.taskCount}>📄</span>
                </div>
                <p className={styles.taskDescription}>View, Organize and manage your daily tasks.</p>
              </div>
            </Link>

            <Link href="dashboard/analytics">
              <div className={styles.analyticsCard}>
                <div className={styles.taskHeader}>
                  <h2 className={styles.taskTitle}>Analytics</h2>
                  <span className={styles.taskCount}>📊</span>
                </div>
                <p className={styles.taskDescription}>Track your productivity and progress.</p>
              </div>
            </Link>

            <Link href="dashboard/settings">
              <div className={styles.analyticsCard}>
                <div className={styles.taskHeader}>
                  <h2 className={styles.taskTitle}>Settings</h2>
                  <span className={styles.taskCount}>⚙️</span>
                </div>
                <p className={styles.taskDescription}>Configure your application preferences.</p>
              </div>
            </Link>

            <Link href="dashboard/users">
              <div className={styles.analyticsCard}>
                <div className={styles.taskHeader}>
                  <h2 className={styles.taskTitle}>Users</h2>
                  <span className={styles.taskCount}>👥</span>
                </div>
                <p className={styles.taskDescription}>Manage team members and permissions.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard