import React, {useRef, useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import { debounce } from '../../utils/uiOptimization';

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  padding-right: 20px;
  height: 40px;
  background: ${style["default-color"]};
  .icon-back{
    font-size: 24px;
    color: ${style["font-color-light"]};
  }
  .box{
    flex: 1;
    margin: 0 5px;
    line-height: 25px;
    background: #dcdcdc;
    color: ${style["highlight-background-color"]};
    font-size: ${style["font-size-m"]};
    outline: none;
    border: none;
    &::placeholder{
      color: ${style["font-color-light"]};
    }
  }
  .icon-delete{
    font-size: 16px;
    color: ${style["background-color"]};
  }
`

const SearchBox = (props) => {
  const queryRef = useRef();
  const [query, setQuery] = useState('');
  // 新关键词
  const { newQuery } = props;
  // 针对关键词请求
  const { handleQuery } = props;
  // 缓存方法
  let handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500);
  }, [handleQuery]);

  // 防抖
  useEffect(() => {
    handleQueryDebounce(query);
  }, [query]);
  useEffect(() => {
    queryRef.current.focus();
  }, []);
  useEffect(() => {
    if(newQuery !== query){
      setQuery(newQuery);
    }
  }, [newQuery]);
  // 监听输入框内容
  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const clearQuery = () => {
    setQuery('');
    queryRef.current.focus();
  }
  
  const displayStyle = query ? {display: 'block', color: '#000'}: {display: 'none'};

  return (
    <SearchBoxWrapper>
      <i className="iconfont icon-back" onClick={() => props.back()}>&#xe655;</i>
      <input ref={queryRef} className="box" placeholder="输入商品名" value={query} onChange={handleChange}/>
      <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe600;</i>
    </SearchBoxWrapper>
  )
};

export default React.memo(SearchBox);