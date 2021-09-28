import React from 'react'
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../wallet.module.css';


export default function CoinsContainer() {
  const { data } = useSelector((state) => state.apisReducer)

  return (
    <div className={styles.coinsContainer}>
      {data.map((item, index) => (
        <div key={item.id}>
          <img src={item.image.small}/>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  )
}
