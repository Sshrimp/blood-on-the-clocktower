import { produce } from 'immer';
import * as actionTypes from './constants';
import _ from 'lodash';

const defaultState = {
  shopList:[],
  enterloading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  category: "1001",
  pageCount: 0,
  listOffset: 0,
  index: 0
}

export const shopReducer = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ENTERLOADING:
      state.enterloading = action.data;
      break;
    case actionTypes.CHANGE_SHOP_LIST:
      state.shopList = action.data;
      break;
    case actionTypes.CHANGE_CATOGORY:
      state.category = action.data;
      break;
    case actionTypes.CHANGE_PULLUP_LOADING:
      state.pullUpLoading = action.data;
      break;
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      state.pullDownLoading = action.data;
      break;
    case actionTypes.CHANGE_PAGE_COUNT:
      state.pageCount = action.data;
      break;
    case actionTypes.REFRESH_MORE_SHOP_LIST:
      state.shopList = _.shuffle(action.data);
      break;
    case actionTypes.CHANGE_LIST_OFFSET:
      state.listOffset = action.data;
      break;
    case actionTypes.CHANGE_INDEX:
      state.index = action.data;
      break;
  }
}, defaultState);