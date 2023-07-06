import React, { useState, useRef, useEffect, memo } from 'react';
import styled from'styled-components';
import Scroll from '../scroll/index'
import { PropTypes } from 'prop-types';
import style from '../../assets/Global-style';

const List = styled.div`
  display: flex;
  justify-content: center;
  /* height: 30px; */
  position: fixed;
  left: 0;
  width: 75px;
  overflow: hidden;
  flex-direction: column;
  z-index: 999;
`
const ListItem = styled.span`
  flex: 0 0 auto;
  width: 75px;
  text-align: center;
  /* flex-direction: column; */
  font-size: ${style ["font-size-m"]};
  padding: 20px 0px;
  &.selected {
    color: ${style["theme-color"]};
    background-color: #fff;
    opacity: 0.8;
  }
`

function column(props) {
    const Category = useRef (null);
    const { list, oldVal } = props;
    const { handleClick } = props;
    
    useEffect (() => {
        let categoryDOM = Category.current;
        let tagElems = categoryDOM.querySelectorAll("span");
        let totalHeight = 0;
        Array.from (tagElems).forEach (ele => {
          totalHeight += ele.offsetHeight;
        });
        categoryDOM.style.Height = `${totalHeight}px`;
      }, []);
    
    return (
        <Scroll direction={"vertical"}>
        <div ref={Category}>
        <List>
            {
            list.map ((item) => {
                return (
                <ListItem 
                    key={item.key}
                    className={`${oldVal === item.key ? 'selected': ''}`} 
                    onClick={() => handleClick (item.key)}>
                    {item.name}
                </ListItem>
                )
            })
            }
        </List>
        </div>
  </Scroll>
  )
}

column.defaultProps = {
  list: [],
  oldVal: '',
  handleClick: null
};

column.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  handleClick: PropTypes.func
};
export default memo (column);