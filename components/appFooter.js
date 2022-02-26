import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function AppFooter() {
  return (
    <footer className={styles.appFooter}>
      <h1>OO떡집</h1>
      <p>주소: OO시 OO동</p>
    </footer>
  )
}