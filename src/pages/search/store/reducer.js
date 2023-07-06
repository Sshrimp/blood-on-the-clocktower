import { produce } from 'immer';
import * as actionTypes from './constants';

const defaultState = ({
  hotKeyWords: [], // 热门关键词列表
  enterLoading: false,
  resultList: []
})

export const searchReducer = produce((state, action) => {
    switch(action.type) {
        case actionTypes.SET_HOT_KEYWRODS:
            state.hotKeyWords = action.data
            break;
        case actionTypes.SET_ENTER_LOADING:
            state.enterLoading = action.data
            break;
        case actionTypes.SET_RESULT_LIST:
            state.resultList = action.data
            break;
    }
}, defaultState)