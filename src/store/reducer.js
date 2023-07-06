import { combineReducers } from "redux";
import { shopReducer } from '../pages/shopping/store';
import { searchReducer } from '../pages/search/store';
import { shopDetailReducer } from '../pages/shop/store';


export default combineReducers({
  shopping: shopReducer,
  search: searchReducer,
  shopDetail: shopDetailReducer
});