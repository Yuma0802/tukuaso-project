import React from "react";
import styled, { keyframes } from 'styled-components';

const CommonBtn = (props) => {

  return(
    <SCommonBtnWrap>
    <SCommonBtnWard onClick={props.clickedFn}>{props.text}</SCommonBtnWard>
  </SCommonBtnWrap>
  );
};

const SCommonBtnWrap = styled.div`
  height: 48px;
  width: 160px;
  display:inline-block;
  text-align: center;
  border: 1px solid #FFFFFF;
  
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #FFFFFF;
    transition: 2.0s ;
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

const SCommonBtnWard = styled.p`

  margin: 0px;
  padding-top: 7.5px;
  width: 100%;
  height: 100%;

  font-family: 'Noto Serif JP';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  &:hover {
   color: black;
  }
`;

export default CommonBtn;