import React from "react";
import styled from 'styled-components';
import out3Img from '../../img/out_3.jpg';
import CommonBtn from "../Atoms/CommonBtn";

const Lv3OutPage = (props) => {

  return(
    <WholeWraps>

    <BtnWraper>
    <SCommonBtnWrap >やりなおす</SCommonBtnWrap>
    </BtnWraper>
  </WholeWraps>
  );
};

const WholeWraps = styled.div`
  //display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;

  /* 画像ファイルの指定 */
  background-image: url(${out3Img});
  
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
  position: absolute;
  top: 0;
  right: 70%;
  bottom: 0;
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
    border: 1px solid #4B0451;
    font-family: 'Noto Serif JP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: rgba(200,0,0);
    background-color: rgba(13,17,53,0.3) ;

    outline: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(172,0,0,0.5);
    transition: 300ms ;
  }
  &::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    color: #2B012F;
  }
  &:hover::after {
    background: #333;
    -webkit-transform: scale(1);
    transform: scale(1);
    color: #2B012F;
 }
`;


export default Lv3OutPage;