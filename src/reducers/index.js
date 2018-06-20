import { combineReducers } from 'redux';
import StockReducer from './reducer_stock';

const rootReducer = combineReducers({
  stock: StockReducer
  // state: (state = {}) => state
});

export default rootReducer;
