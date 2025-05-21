"use client"
import React from "react";
import Link from "next/link";
import styles from "../../../style/userDetails.module.css";

const UserDetails = () => {
  const user = {
    id: "USR-789456",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Administrator",
    status: "Active",
    lastActive: "2 hours ago",
    joinDate: "15 March 2022",
    avatar: "pic.svg",
    bio: "Senior product designer with 8 years of experience. Leads the design team and oversees all creative projects.",
    permissions: ["Dashboard", "Users", "Settings", "Analytics", "Content"],
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/dashboard/users" className={styles.backButton}>
          <svg
            className={styles.backIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Users
        </Link>
        <h1 className={styles.title}>User Details</h1>
      </div>

      <div className={styles.userProfile}>
        <div className={styles.profileHeader}>
          <div className={styles.avatarContainer}>
            <img
              src={user.avatar}
              alt={user.name}
              className={styles.avatar}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "pic.svg";
              }}
            />
            <span
              className={`${styles.statusBadge} ${
                user.status === "Active" ? styles.active : styles.inactive
              }`}
            >
              {user.status}
            </span>
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userRole}>{user.role}</p>
            <p className={styles.userId}>ID: {user.id}</p>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.editButton}>
              <svg
                className={styles.editIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit Profile
            </button>
            <button className={styles.moreButton}>
              <svg
                className={styles.moreIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <circle cx="12" cy="5" r="1" fill="currentColor" />
                <circle cx="12" cy="19" r="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.profileContent}>
          <div className={styles.detailsCard}>
            <h3 className={styles.cardTitle}>Basic Information</h3>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Email</span>
              <span className={styles.detailValue}>{user.email}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Status</span>
              <span
                className={`${styles.detailValue} ${
                  user.status === "Active"
                    ? styles.activeText
                    : styles.inactiveText
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Last Active</span>
              <span className={styles.detailValue}>{user.lastActive}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Member Since</span>
              <span className={styles.detailValue}>{user.joinDate}</span>
            </div>
          </div>

          <div className={styles.detailsCard}>
            <h3 className={styles.cardTitle}>About</h3>
            <p className={styles.bioText}>{user.bio}</p>
          </div>

          <div className={styles.detailsCard}>
            <h3 className={styles.cardTitle}>Permissions</h3>
            <div className={styles.permissionsGrid}>
              {user.permissions.map((permission, index) => (
                <span key={index} className={styles.permissionBadge}>
                  {permission}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.activitySection}>
          <h3 className={styles.sectionTitle}>Recent Activity</h3>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#6e45e2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V12L15 15"
                    stroke="#6e45e2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.activityContent}>
                <p className={styles.activityText}>
                  Logged in to the dashboard
                </p>
                <p className={styles.activityTime}>Today, 10:30 AM</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#6e45e2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#6e45e2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="#6e45e2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="#6e45e2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.activityContent}>
                <p className={styles.activityText}>Updated user permissions</p>
                <p className={styles.activityTime}>Yesterday, 3:45 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
