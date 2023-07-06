import React, { useEffect, useRef, createContext, useState } from 'react';
import RecommendList from '../../components/list';
import * as actionTypes from './store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import Horizen from '../../baseUI/horizen-item';
import { categoryTypes } from '../../api/config';
import Loading from '../../baseUI/loading';
import { forceCheck } from 'react-lazyload';
import { Content } from './style';
import Scroll from '../../baseUI/scroll';
import { Outlet } from 'react-router-dom';
import SearchInput from '../../baseUI/search-input';

export const ShopsContext = createContext();

const Shop = (props) => {

  let [recommendShopList, setRecommendShopList] = useState([]);

  const { shopList, enterloading, category, pageCount, pullUpLoading, pullDownLoading, listOffset } = useSelector((state) => ({
    shopList: state.shopping.shopList,
    enterloading: state.shopping.enterloading,
		category: state.shopping.category,
    pageCount: state.shopping.pageCount,
    pullUpLoading: state.shopping.pullUpLoading,
    pullDownLoading: state.shopping.pullDownLoading,
    listOffset: state.shopping.listOffset
  }));

  const scrollRef = useRef(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(!shopList.length) {
      getShopDataDispatch(category);
    }
  },[])

  useEffect(() => {
    setRecommendShopList(shopList.slice(0, 10));
  }, [shopList])

	useEffect(() => {
		refreshDataDispatch(category);
	},[category])

  const refreshDataDispatch = (category) => {
    dispatch(actionTypes.changeEnterLoading(true));
    dispatch(actionTypes.updateCategoryData(category));
  }

  const getShopDataDispatch = (category) => {
    dispatch(actionTypes.getShopList(category));
  }

  const handleUpdatList = (newVal) => {
    if(category === newVal) return;
    dispatch(actionTypes.changeEnterLoading(true));
    dispatch(actionTypes.changeCategory(newVal));
    scrollRef.current.refresh();  
  }

  // 顶部下拉刷新
  const handlePullDown = () => {
    pullDownRefresh(category, pageCount);
  }
  
  const pullDownRefresh = () => {
    dispatch(actionTypes.changePullDownLoading(true));
    dispatch(actionTypes.changeListOffset(0));
    dispatch(actionTypes.refreshShopList(category));
  }

  // 滑到最底部刷新部分的处理
  const handlePullUp = () => {
    pullUpRefresh(category, pageCount);
  }

  const pullUpRefresh = (category, count) => {
    dispatch(actionTypes.changePullUpLoading(true));
    dispatch(actionTypes.refreshMoreShopList(listOffset, category, shopList));
    dispatch(actionTypes.changePageCount(() => count + 1));
  }

  return (
    <ShopsContext.Provider value={{recommendShopList, shopList}}>
      <SearchInput></SearchInput>
      <Horizen title={""} list={categoryTypes} handleClick={(v) => handleUpdatList(v)} oldVal={category} />
      <Content>
        <Scroll 
          onScroll={forceCheck}
          pullUp={ handlePullUp }
          pullDown = { handlePullDown }
          ref={ scrollRef }
          pullUpLoading = { pullUpLoading }
          pullDownLoading = { pullDownLoading }
        >
          <div>
            <RecommendList recommendList={shopList} />
          </div>
        </Scroll>
      </Content> 
			{ enterloading ? <Loading></Loading> : null}
      <Outlet />
    </ShopsContext.Provider>
  )
};

export default React.memo(Shop);
