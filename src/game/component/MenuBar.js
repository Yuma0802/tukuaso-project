import styled from 'styled-components';

import candleImg from './../../img/candle.png';
import translationImg from './../../img/translationIcone.jpeg';
import arrowImg from './../../img/arrow.svg';

const Bar = styled.div`
    padding: 0 40px;
    width: 100vw;
    height: 75px;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Time = styled.h3`
    margin-right: 15px;
    color: white;
    font-size: 28px;
`;

const ImgCandle = styled.img`
    margin: 8px;
    width: 28px;
`

const BackHome = styled.h3`
    color: white;
    font-size: 16px;
`;

const TranslationImg = styled.img`
    margin: 0 0 0 20px;
    width: 36px;
`;

const Arrow = styled.img`
    margin: 0 10px;
    width: 24px;
`;

const MenuBar = (props) => {
    return(
        <Bar>
            <Flex>
                <Time>{props.time}</Time>
                <ImgCandle src={candleImg} />
                <ImgCandle src={candleImg} />
            </Flex>
            <Flex>
                <Arrow src={arrowImg} />
                <BackHome>ホームに戻る</BackHome>
                {/* <TranslationImg src={translationImg} /> */}
            </Flex>
        </Bar>
    );
}
export default MenuBar;