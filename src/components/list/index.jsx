import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import { getCount } from '../../utils/shop';
import { 
  ListItem,
  List
} from './style';
import shopImg from './shop.png';

// useNavigate 代替 useHistory
function RecommendList(props) {
  let navigate = useNavigate();
  const enterDetail = (id) => {
    // console.log(id);
    navigate(`/shop/${id}`);
  }

  return (
      <List>
        {
          props.recommendList.map(item => {
            return (
              <ListItem key={item.purchaseNum} onClick={() => enterDetail(item.purchaseNum)}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  <LazyLoad placeholder={<img width="100%" height="100%" src={shopImg} alt="music"/>}>
                    <img src={item.image} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                  <div className="show_price">
                    <svg t="1641216704920" className='i' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2168" width="15" height="15"><path d="M883 552.5v-87.7H617.8L864.9 107l-73-48-272.6 394.9L246 59.4 172.3 106l247.5 358.8H154.9v87.1h320v90.2h-320V731h320v234h88.7V729.8H883v-86.5H563.6v-89.5z" p-id="2169" fill="#333333"></path></svg>
                    <span className="content">{item.price}</span>
                  </div>
                  <div className="play_count">
                    <span className="count">{getCount(item.purchaseNum)}+人付款</span>
                  </div>
                  <div className="desc">{item.title}</div>
                </div>
              </ListItem>
            )
          })
        }
      </List>
  );

}


export default React.memo(RecommendList);