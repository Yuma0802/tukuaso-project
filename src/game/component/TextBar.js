import styled from 'styled-components';

import textBarImg from './../../img/textBar.png';

const TextBarWrap = styled.div`
    position: relative;
`;

const TextBarImg = styled.img`
    position: absolute;
    width: 100%;
    height: 140px;
    top: 0;
    left: 0;
`;

const Text = styled.h3`
    position: absolute;
    color: black;
    font-size: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 160%);
`;

const TextBar = (props) => {
    return(
        <TextBarWrap>
            <TextBarImg src={textBarImg} />
            <Text>{props.text}</Text>
        </TextBarWrap>
    );
}
export default TextBar;