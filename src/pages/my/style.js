import styled from 'styled-components';
import style from '../../assets/Global-style';

export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${style["default-color"]};
    .order-btn {
        text-align: center;
        line-height: 60px;
        margin-top: 4px;
        height: 60px;
        width: 100%;
        background: ${style["background-color"]};
    }
` 
export const PersonInfo = styled.div`
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    border-bottom: 10px solid ${style["default-color"]};
`

export const OrderContainer = styled.div`
    width: 100%;
    height: 120px;
    background: ${style["background-color"]};
    .order-top {
        display: flex;
        justify-content: space-between;
        .order-top_left {
        margin-top: 20px;
        margin-left: 10px;
        display: flex;
        width: 60px;
        justify-content: space-between;
        }
        .order-top_right {
        margin-top: 20px;
        margin-right: 10px;
        }
    }
    .order-body {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
`

export const OroderBody = styled.div`
    .order-body {
        display: grid;
        grid-template-rows: repeat(6 60px);
        .order-item {   
            height: 60px;
            width: 100%;
            text-align: center;
            background: ${style["background-color"]};
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 2px solid ${style["default-color"]};
        }
    }
`



