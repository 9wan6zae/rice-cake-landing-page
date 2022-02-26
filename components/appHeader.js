import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function AppHeader() {
  const links = [
    {
      href: '/info',
      title: '떡집소개',
    },
    {
      href: '/info',
      title: '떡 소개',
    },
  ]
  return (
    <header className={styles.appHeader}>
      <Link href="/" passHref><h1>Logo</h1></Link>
      <nav>
        {links.map(link => (
          <Link key={link.title} href={link.href} passHref>
            <span className={styles.link}>{link.title}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}