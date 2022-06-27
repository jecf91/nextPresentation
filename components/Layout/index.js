import React from 'react';
import Nav from '../Nav';
import Header from "../Header";

import styles from '../../styles/Layout.module.css';

export default function index({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header/>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
