import React from 'react';
import styles from './wallet.module.css';
import { useState } from 'react';
import { fetchCoin } from '../redux/actions';
import { useDispatch } from 'react-redux';
import CoinsContainer from './pagesComponents/CoinsContainer';

export default function Wallet() {
  const [inputCoin, setInputCoin] = useState('');
  const dispatch = useDispatch();

  const addCoinFunction = () => {
    dispatch(fetchCoin(inputCoin));
  }
  
  return (
    <div className={ styles.mainBodyWallet }>
      <input type="text" onChange={({target}) => setInputCoin(target.value)}/>
      <button type="button" onClick={ addCoinFunction }>Adicionar</button>

      <CoinsContainer />
    </div>
  )
}
