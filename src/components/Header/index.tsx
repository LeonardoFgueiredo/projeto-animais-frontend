import React from 'react'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
