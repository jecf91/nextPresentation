import React from 'react';
import Link from 'next/link';
import navStyles from '../../styles/Nav.module.css';

export default function index() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/webdev">webdev</Link>
        </li>
      </ul>
    </nav>
  );
}
