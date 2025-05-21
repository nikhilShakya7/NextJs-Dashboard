"use client";
import React from "react";
import Link from "next/link";
import  styles from '../../../style/user-list.module.css'
const users = [
  {
    id: "USR-789456",
    name: "Alex Johnson",
    email: "alex.johnson@gmail.com",
    role: "Administrator",
    status: "Active",
    avatar: "/pic1.svg",
  },
  {
    id: "USR-234589",
    name: "Taylor Smith",
    email: "taylor.smith@gmail.com",
    role: "Editor",
    status: "Inactive",
    avatar: "/pic2.svg",
  },
  {
    id: "USR-456123",
    name: "Mark Lee",
    email: "mark.lee@hotmail.com",
    role: "Viewer",
    status: "Active",
    avatar: "/pic3.svg",
  },
   {
    id: "USR-428286",
    name: "Ben White",
    email: "ben.white@gmail.com",
    role: "Designer",
    status: "Active",
    avatar: "/pic5.svg",
  },
  {
    id: "USR-426831",
    name: "Marry Johns",
    email: "marry.john@gmail.com",
    role: "Accountant",
    status: "Inactive",
    avatar: "/pic4.svg",
  },
];

const UserList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>User Management</h1>
        <button className={styles.addButton}>+ Add User</button>
      </div>

      <div className={styles.userTable}>
        <div className={styles.tableHeader}>
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        {users.map((user) => (
          <div className={styles.userRow} key={user.id}>
            <div className={styles.userInfo}>
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
              <span>{user.name}</span>
            </div>
            <span>{user.email}</span>
            <span>{user.role}</span>
            <span
              className={`${styles.status} ${
                user.status === "Active" ? styles.active : styles.inactive
              }`}
            >
              {user.status}
            </span>
            <div className={styles.actions}>
              <Link href={`/dashboard/users/${user.id}`} className={styles.viewBtn}>
                View
              </Link>
              <button className={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
