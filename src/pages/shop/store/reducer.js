import { produce } from 'immer';
import * as actionTypes from './constants';

const defaultState = {
  loading: true,
  shopListDetail: [],
}

export const shopDetailReducer = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOADING:
      state.loading = action.data;
      break;
    case actionTypes.CHANGE_SHOP_DETAIL:
      state.shopListDetail = action.data;
      break;
  }
}, defaultState)