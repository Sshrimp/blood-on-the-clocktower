import React from "react";
import styled from "styled-components";
import style from '../../assets/Global-style'
import { useNavigate } from 'react-router-dom';

const Inputstyle = styled.div`
    margin: 5px 0px;
    left: 20px;
    height: 30px;
    width: 75vw;
    background-color: ${style["default-color"]};
    position: relative;
    border-radius: 10px;
    .input {
        position: absolute;
        width: 200px;
        height: 28px;
        background-color: ${style["default-color"]};
        border: none;
        right: 0;
        border-radius: 10px;
    }
    .icon {
        left: 8px;
        position: absolute;
        top: 7px;
    }
    .icon-class {
        position: absolute;
        margin-left: 110%;
    }
`

const SearchInput = () => {
    const navigate = useNavigate()
    return (
      <Inputstyle>
        <span onClick={() => navigate('/search')} >
          <span className='icon iconfont'>&#xe62b;</span>
          <input className="input" type="text" placeholder="搜索单品"  />
        </span>
				<svg onClick={() => navigate('/kind')} t="1642080131303" className="icon icon-class" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2840" width="16" height="16"><path d="M361.472 488.448H215.04c-67.584 0-122.88-55.296-122.88-122.88V219.136c0-67.584 55.296-122.88 122.88-122.88h146.432c67.584 0 122.88 55.296 122.88 122.88v146.432c0 67.584-54.272 122.88-122.88 122.88zM215.04 178.176c-22.528 0-40.96 18.432-40.96 40.96v146.432c0 22.528 18.432 40.96 40.96 40.96h146.432c22.528 0 40.96-18.432 40.96-40.96V219.136c0-22.528-18.432-40.96-40.96-40.96H215.04zM808.96 488.448H662.528c-67.584 0-122.88-55.296-122.88-122.88V219.136c0-67.584 55.296-122.88 122.88-122.88H808.96c67.584 0 122.88 55.296 122.88 122.88v146.432c0 67.584-55.296 122.88-122.88 122.88zM662.528 178.176c-22.528 0-40.96 18.432-40.96 40.96v146.432c0 22.528 18.432 40.96 40.96 40.96H808.96c22.528 0 40.96-18.432 40.96-40.96V219.136c0-22.528-18.432-40.96-40.96-40.96H662.528zM808.96 927.744H662.528c-67.584 0-122.88-55.296-122.88-122.88V658.432c0-67.584 55.296-122.88 122.88-122.88H808.96c67.584 0 122.88 55.296 122.88 122.88v146.432c0 67.584-55.296 122.88-122.88 122.88zM662.528 617.472c-22.528 0-40.96 18.432-40.96 40.96v146.432c0 22.528 18.432 40.96 40.96 40.96H808.96c22.528 0 40.96-18.432 40.96-40.96V658.432c0-22.528-18.432-40.96-40.96-40.96H662.528zM361.472 927.744H215.04c-67.584 0-122.88-55.296-122.88-122.88V658.432c0-67.584 55.296-122.88 122.88-122.88h146.432c67.584 0 122.88 55.296 122.88 122.88v146.432c0 67.584-54.272 122.88-122.88 122.88zM215.04 617.472c-22.528 0-40.96 18.432-40.96 40.96v146.432c0 22.528 18.432 40.96 40.96 40.96h146.432c22.528 0 40.96-18.432 40.96-40.96V658.432c0-22.528-18.432-40.96-40.96-40.96H215.04z" fill="#00cbcc" p-id="2841"></path></svg>
      </Inputstyle>
    )
}

export default SearchInput