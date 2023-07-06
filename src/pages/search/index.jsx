import React, {useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchBox from '../../baseUI/search-box';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from './store/actionCreators';
import { Container, ShortcutWrapper, HotKey, GoodItem } from './style';
import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading';
import LazyLoad, {forceCheck} from 'react-lazyload';

function Search () {
  // 控制动画
  const [show, setShow] = useState (false);
  const [query, setQuery] = useState ('');
  const navigate = useNavigate();

  const { hotKeyWords, enterLoading, resultList } = useSelector((state) => ({
    hotKeyWords: state.search.hotKeyWords,
    enterLoading: state.search.enterLoading,
    resultList: state.search.resultList
  }));
  
  const dispatch = useDispatch();

  const getHotKeyWordsDataDispatch = () => {
    dispatch(actionTypes.getHotKeyWords());
  }
  const getResultListDispatch = (q) => {
    dispatch(actionTypes.getResultGoodList(q))
  }
  useEffect (() => {
    setShow (true);
    if (!hotKeyWords.length) {
    getHotKeyWordsDataDispatch()
    // console.log(hotKeyWords);
    }
  }, []);

  const renderHotKeyWords = () => {
    let list = hotKeyWords || [];
    // console.log(list);
    // console.log(hotKeyWords);
    return (
      <ul>
        {
          list.map (item => {
            return (
              <li className="item" key={item.key} onClick={() => setQuery (item.name)}>
                <span>{item.name}</span>
              </li>
            )
          })
        }
      </ul>
    )
  };

  const renderResultList = () => {
    let list = resultList || []
    return (
      <GoodItem> 
        {
          list.map(item => {
            return (
              <li key={item.id} > 
                <div className="info">
                  <span>{item.title}</span>
                </div>
              </li>
            )
          })
        }
      </GoodItem>
    )
  }
  
  // 传给子组件的方法尽量使用useCallback 只在第一次产生新的函数
  const searchBack = useCallback (() => {
    setShow (false);
  }, []);
  const handleQuery = (q) => {
    setQuery (q);
    if(!q) return;
    dispatch(actionTypes.changeEnterLoading(true));
    getResultListDispatch(q);
  }

  return (
    <CSSTransition
    in={show}
    timeout={300}
    appear={true}
    classNames="fly"
    unmountOnExit
    onExited={() => navigate(-1)}
  >
    <Container>
        <div className="search_box_wrapper">
            <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>
        </div>
        <ShortcutWrapper show={!query}>
        <Scroll>
          <div>
            <HotKey>
              <h1 className="title"> 热门搜索 </h1>
              {renderHotKeyWords ()}
            </HotKey>
          </div>
        </Scroll>
        </ShortcutWrapper>
        <ShortcutWrapper show={query}>
        <Scroll onScorll={forceCheck}>
          <div>
            {renderResultList ()}
          </div>
        </Scroll>
        </ShortcutWrapper>
        { enterLoading? <Loading></Loading> : null }
    </Container>
  </CSSTransition>
  )
}

export default React.memo(Search);