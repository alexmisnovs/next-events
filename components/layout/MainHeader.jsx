import React from "react";
import Link from "next/link";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Events</Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="/events">Browse All Events</Link>
      </nav>
    </header>
  );
};

export default MainHeader;
