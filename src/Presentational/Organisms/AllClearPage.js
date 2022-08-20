import React, { useState } from "react";
import styled from 'styled-components';
import allClear1Img from '../../img/all_clear_1.jpg';
import allClear2Img from '../../img/all_clear_2.jpg';
import CommonBtn from "../Atoms/CommonBtn";

const AllClearPage = () => {
  const [flagOne,setFlagOne] = useState(true);
  const [flagTwo,setFlagTwo] = useState(true);

  setTimeout(() => {setFlagOne(false)}, 1500)
  setTimeout(() => {setFlagTwo(false)}, 3000)

  const goPage = () => {
    window.location.href = '/game/1';
  }

  return(

    <AllWrap>
      <FirstBackground />
      <SecondBackground flag={flagOne}/>
      <BtnWraper flag={flagTwo}>
        <SCommonBtnWrap onClick={goPage}>おわり</SCommonBtnWrap>
      </BtnWraper>
    </AllWrap>

  );
};
const AllWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const FirstBackground = styled.div`
  //display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 100vh;

  /* 画像ファイルの指定 */
  background-image: url(${allClear1Img});
  
  /* 画像を常に天地左右の中央に配置 */
  background-position: center center;
  
  /* 画像をタイル状に繰り返し表示しない */
  background-repeat: no-repeat;
  
  /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
  background-attachment: fixed;
  
  /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
  background-size: cover;
  
  /* 背景画像が読み込まれる前に表示される背景のカラー */
  background-color: #464646;
`;
const SecondBackground = styled.div`
  transition: 1000ms;
  opacity: ${(props) => props.flag ? 0 : 1};

  //display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;

  /* 画像ファイルの指定 */
  background-image: url(${allClear2Img});
  
  /* 画像を常に天地左右の中央に配置 */
  background-position: center center;
  
  /* 画像をタイル状に繰り返し表示しない */
  background-repeat: no-repeat;
  
  /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
  background-attachment: fixed;
  
  /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
  background-size: cover;
  
  /* 背景画像が読み込まれる前に表示される背景のカラー */
  background-color: #464646;
`;


const BtnWraper = styled.div`
  transition: 1000ms;
  opacity: ${(props) => props.flag ? 0 : 1};

  position: absolute;
  top: 0;
  right: 70%;
  bottom: 0px;
  left: 0;
  margin: auto; /*上下左右中央に*/
  height: 48px;
  width: 160px;
`;

const SCommonBtnWrap = styled.button`
    height: 69px;
    width: 170px;
    display: inline-block;
    text-align: center;
    border: 1px solid black;
    font-family: 'Noto Serif JP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: white;
    background-color: transparent;

    outline: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(0,0,0,0.7);
    transition: 300ms ;
  }
  &::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    color: white;
  }
  &:hover::after {
    background: #333;
    -webkit-transform: scale(1);
    transform: scale(1);
    color: white;
 }
`;


export default AllClearPage;