import * as actionTypes from './constants';

export const changeShopDetail = (data) => ({
  type: actionTypes.CHANGE_SHOP_DETAIL,
  data
});

export const changeLading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
});

export const goToDetail = (data) => {
  return (dispatch) => {
    dispatch(changeLading(true));
    setTimeout(() => {
      dispatch(changeShopDetail(data));
      dispatch(changeLading(false));
    }, 1000)
  }
}




