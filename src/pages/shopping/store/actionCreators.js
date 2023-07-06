import * as actionTypes from './constants';
import { getShopListRequest, getMoreShopListRequest } from '../../../api/request';

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_SHOP_LIST,
  data
});

export const updateShopList = (data) => ({
  type: actionTypes.REFRESH_MORE_SHOP_LIST,
  data
});

export const changeListOffset = (data) => ({
  type: actionTypes.CHANGE_LIST_OFFSET,
  data
});

//进场 loading
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTERLOADING,
  data
});

//滑动最底部loading
export const changePullUpLoading = (data) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
});

export const changePageCount = (data) => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data
});

export const changeCategory = (data) => ({
  type: actionTypes.CHANGE_CATOGORY,
  data
})

export const changeIndex = (data) => ({
  type: actionTypes.CHANGE_INDEX,
  data
})

export const refreshMoreShopList = (offset, category, shopList) => {
  return (dispatch) => {
    getMoreShopListRequest(category, offset).then(res => {
      const data = [...shopList, ...res.data.data.items];
      const length = data.length;
        setTimeout(() => {
          dispatch(changeRecommendList(data));
          dispatch(changePullUpLoading(false));
          dispatch(changeListOffset(length));
        }, 1000)
    }).catch(() => {
      console.log('刷新获取数据失败');
    })
  }
}

export const refreshShopList = (category) => {
  return (dispatch) => {
    getShopListRequest(category).then(data => {
      setTimeout(() => {
        dispatch(updateShopList(data.data.data.items));
        dispatch(changePullDownLoading(false));
      }, 1000)
    }).catch(() => {
      console.log('顶部下拉刷新请求数据失败')
    }) 
  }
}

export const updateCategoryData = (category) => {
  return (dispatch) => {
    getShopListRequest(category).then(data => {
      setTimeout(() => {
        dispatch(updateShopList(data.data.data.items))
        dispatch(changeEnterLoading(false));
      },1000)
    }).catch(() => {
      console.log('数据传输错误');
    })
  }
}
 
export const getShopList = (category) => {
  return (dispatch) => {
    getShopListRequest(category).then(data => {
      setTimeout(() => {
        dispatch(changeRecommendList(data.data.data.items))
        dispatch(changeEnterLoading(false));
      },1000)
    }).catch(() => {
      console.log('数据传输错误');
    })
  }
}