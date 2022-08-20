import React from "react";
import styled, { keyframes } from 'styled-components';

const CommonBtn = (props) => {

  return(
    <SCommonBtnWrap onClick={props.clickedFn}>
      {props.text}
    </SCommonBtnWrap>
  );
};

const SCommonBtnWrap = styled.button`
    height: 69px;
    width: 170px;
    display: inline-block;
    text-align: center;
    border: 1px solid #F3F3F3;
    font-family: 'Noto Serif JP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: white;
    background-color: transparent;

    outline: none;
  
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #F3F3F3;
    transition: 300ms ;
  }
  &::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    color: black;
  }
  &:hover::after {
    background: #333;
    -webkit-transform: scale(1);
    transform: scale(1);
    color: black;
 }
`;

// const SCommonBtnWard = styled.p`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   margin: auto;
//   width: 100%;
//   height: 100%;

//   font-family: 'Noto Serif JP';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 24px;
//   line-height: 34px;
//   letter-spacing: 0.04em;
//   color: #F3F3F3;
//   &:hover {
//    color: black;
//   }
// `;

export default CommonBtn;