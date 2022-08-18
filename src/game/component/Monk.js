import styled from 'styled-components';

import MonkImg from './../../img/monk.png';

const Monk = (props) => {
    const Img = styled.img`
        position: absolute;
        top: ${props.top}px;
        left: ${props.left}px;
        width: 34px;
    `;

    return(
        <Img src={MonkImg} />
    );
}
export default Monk;