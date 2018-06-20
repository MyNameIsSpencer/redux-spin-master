import axios from 'axios';

const API_FUNCTION = 'TIME_SERIES_WEEKLY_ADJUSTED';
const SPIN_SYMBOL = 'TOY';
const API_KEY = '9GR1NJ63OZUJXWYA';
const ROOT_URL = 'https://www.alphavantage.co/query?';

//  function    function=TIME_SERIES_WEEKLY_ADJUSTED
//  symbol      symbol=MSFT
//  https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo



export const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock(symbol) {
  const url = `${ROOT_URL}function=${API_FUNCTION}&symbol=${symbol}&apikey=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_STOCK,
    payload: request
  };
}
