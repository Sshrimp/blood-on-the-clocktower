import React, { useCallback, useContext, useEffect, useState, useMemo } from 'react';
import { 
Container, 
ShopDetailContainer, 
ShopIndentify, 
BuyBtn,
CommentsBox 
} from './style';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import { ShopsContext } from '../shopping';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../../components/slider';
import SliderV2 from '../../components/slider-v2';
import ShopCard from '../../components/shopCard';
import { getCount } from '../../utils/shop';
import * as actionTypes from './store/actionCreators';
import Loading from '../../baseUI/loading';
import indentifyImg from './shopIndentify.png';
import Scroll from '../../baseUI/scroll';
import BackBox from '../../baseUI/back-box';
import Comments from '../../components/comments';
import _ from 'lodash';

const ShopDetail = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showStatus, setShowStatus] = useState(true);

  const { recommendShopList, shopList } = useContext(ShopsContext);
  const { id } = useParams();
  const [index] = useState(_.findIndex(shopList, function(o) {return o.purchaseNum == id}));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { loading, shopListDetail } = useSelector((state) => ({
    loading: state.shopDetail.loading,
    shopListDetail: state.shopDetail.shopListDetail
  }));

  const backToShops = useCallback(() => {
    setShowStatus(false);
  }, []); 

  const changePopup = useCallback(() => {
    setShowPopup(!showPopup);
  },[showPopup])

  const changePopup2 = useCallback(() => {
    
    setShowPopup2(!showPopup2);
  },[showPopup2])
  useEffect(() => {
    dispatch(actionTypes.goToDetail(shopList[index].imageArr));
  },[])

  const ShopDetail = () => {
    return (
      <ShopDetailContainer>
        <div className="shop-price">
          <div className='shop-left'>
            <svg t="1641216704920" className='i' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2168" width="15" height="15"><path d="M883 552.5v-87.7H617.8L864.9 107l-73-48-272.6 394.9L246 59.4 172.3 106l247.5 358.8H154.9v87.1h320v90.2h-320V731h320v234h88.7V729.8H883v-86.5H563.6v-89.5z" p-id="2169" fill="#333333"></path></svg>
            <span className='shop-left_font'>{shopList[index].price}</span>
          </div>
          <span className='shop-right'>{getCount(shopList[index].purchaseNum)}人付款</span>
        </div>
        <div className="shop-description">
          {shopList[index].title}
        </div>
        <div className='shop-hint'>
          定制内容由商家提供, 非品牌官方定制
        </div>
      </ShopDetailContainer>
    )
  }

  const Identify = () => {
    return (
      <ShopIndentify>
        <img className='shopIdentify' src={indentifyImg} width="100%" />
      </ShopIndentify>
    )
  }
  
  const BuyButtonContainer = () => {
    return (
      <BuyBtn>
        <div className='BuyBtn' onClick={changePopup}>
          立即购买
        </div>
      </BuyBtn>
    )
  }

  const CommentsContainer = () => {
    return (
      <CommentsBox onClick={changePopup2}>
          <div className='title'>查看评论</div>
          <div className='iconfont iconfont-arrow'>&#xe618;</div>
      </CommentsBox>
    )
  }

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => navigate('/shop')}
    >
      <Container>
        <BackBox back={backToShops}/>
        <Scroll
          direction={"vertical"} 
          refresh={true}
        >
          <div>
            <Slider bannerList={useMemo(() => shopListDetail, [shopListDetail])}></Slider>
            <ShopDetail />
            <Identify />
            <SliderV2 bannerList={useMemo(() => recommendShopList, [recommendShopList])}></SliderV2>
            <CommentsContainer />
            { loading ? <Loading/> : null}
          </div>
        </Scroll> 
        {
          showPopup ? <ShopCard changePopup={changePopup} shopInfo={shopList[index]}></ShopCard> : null
        }
        {
          showPopup2 ? <Comments changePopup2={changePopup2}></Comments> : null
        }
        <BuyButtonContainer />
      </Container>
    </CSSTransition>  
  )
}

export default React.memo(ShopDetail);