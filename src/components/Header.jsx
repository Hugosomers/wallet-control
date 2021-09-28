import React from 'react';
import styles from './body.module.css';


export default function Header() {
  return (
    <header className={ styles.header }>
      <h1 className={ styles.title }>Nos investimentos, você é o seu melhor amigo!</h1>
    </header>
  )
}
