import React from 'react';
import { Link } from 'react-router-dom';
import styles from './body.module.css';
import Header from './Header';

export default function Body() {
  return (
    <div className={styles.mainBody}>
      <div>
        <Header />
      </div>
      <div className={ styles.loginDiv }>
        <h2>Controle seus investimentos</h2>
        <Link to="/wallet">
          <button className={ styles.buttons }>Entrar</button>
        </Link>
      </div>
    </div>
  )
}
