import React from 'react';
import styles from '../../style/analytics.module.css';

const SampleChart = ({ color }:{color:string}) => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      background: `linear-gradient(to top, ${color}, transparent)`,
      borderRadius: '8px'
    }}></div>
  );
};

const Analytics = () => {
  const metrics = {
    totalTasks: 142,
    tasksChange: 12.5,
    completedTasks: 98,
    completionRate: 69,
    productivity: 84,
    activeUsers: 24,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Analytics Dashboard</h1>
        <p className={styles.subtitle}>Overview of your teams performance</p>
      </div>

      <div className={styles.dashboardGrid}>
        {/* Task Completion Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Task Completion</h2>
            <div className={`${styles.cardChange} ${metrics.tasksChange > 0 ? styles.positive : styles.negative}`}>
              {metrics.tasksChange > 0 ? '↑' : '↓'} {Math.abs(metrics.tasksChange)}%
            </div>
          </div>
          <div className={styles.cardValue}>{metrics.completedTasks}/{metrics.totalTasks}</div>
          <div className={styles.chartContainer}>
            <SampleChart color="#3b82f6" />
          </div>
        </div>

        {/* Productivity Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Productivity</h2>
            <div className={styles.cardChange}>
              Weekly average
            </div>
          </div>
          <div className={styles.cardValue}>{metrics.productivity}%</div>
          <div className={styles.chartContainer}>
            <SampleChart color="#10b981" />
          </div>
        </div>

        {/* Quick Metrics */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Key Metrics</h2>
          <div className={styles.metricGrid}>
            <div className={`${styles.metricCard} ${styles.usersMetric}`}>
              <div className={styles.metricTitle}>Active Users</div>
              <div className={styles.metricValue}>{metrics.activeUsers}</div>
            </div>
            <div className={`${styles.metricCard} ${styles.tasksMetric}`}>
              <div className={styles.metricTitle}>Total Tasks</div>
              <div className={styles.metricValue}>{metrics.totalTasks}</div>
            </div>
            <div className={`${styles.metricCard} ${styles.completionMetric}`}>
              <div className={styles.metricTitle}>Completion Rate</div>
              <div className={styles.metricValue}>{metrics.completionRate}%</div>
            </div>
            <div className={`${styles.metricCard} ${styles.productivityMetric}`}>
              <div className={styles.metricTitle}>Productivity</div>
              <div className={styles.metricValue}>{metrics.productivity}%</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Recent Activity</h2>
          <div className={styles.chartContainer}>
            <SampleChart color="#8b5cf6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;