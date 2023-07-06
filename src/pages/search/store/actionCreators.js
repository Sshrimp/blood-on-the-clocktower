import * as actionTypes from './constants';
import { getHotKeyWordsRequest, getResultList } from '../../../api/request';

export const changeHotKeyWords = (data) => ({
    type: actionTypes.SET_HOT_KEYWRODS,
    data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data
})

export const changeResultList = (data) => ({
    type: actionTypes.SET_RESULT_LIST,
    data
})
  
export const getHotKeyWords = () => {
    return (dispatch) => {
        getHotKeyWordsRequest().then(data => {
        dispatch(changeHotKeyWords(data.data))
      }).catch(() => {
        console.log('推荐歌单数据传输错误');
      })
    }
}

export const getResultGoodList = (query) => {
    return (dispatch) => {
      getResultList(query).then(data => {
        if (!data) return
        dispatch(changeResultList(data.data))
        dispatch(changeEnterLoading(false));
      }).catch(() => {
        console.log('获取商品数据失败');
      })
    }
}