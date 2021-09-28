import axios from 'axios';

export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export const requestCoinSuccess = (payload) => ({
  type: REQUEST_SUCCESS,
  payload
});

export const fetchCoin = (inputCoin) => {
  return(dispatch) => {
    return axios.get(`https://api.coingecko.com/api/v3/coins/${inputCoin}`)
      .then(({data}) => dispatch(requestCoinSuccess(data)));
  }
};
