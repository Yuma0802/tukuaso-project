import React from "react";
import styled from 'styled-components';
import titleImg from '../../img/titleImg.jpg';
import CommonBtn from "../Atoms/CommonBtn";

const TitlePage = () => {


  return(

    <WholeWraps>

      <TitleWord>僧じゃない</TitleWord>
      <BtnWraper>
        <CommonBtn text="はじめる"/>
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
  background-image: url(${titleImg});
  
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

const TitleWord = styled.h1`
  position: absolute;  /*要素を浮かす*/
  /*relativeを指定した親要素を支点とした位置をすべて0に指定↓*/
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto; /*上下左右中央に*/
  width: 350px;
  height: 73px;

  font-family: 'Shippori Mincho';
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 69px;
  letter-spacing: 0.25em;

  color: #FFFFFF;
`;

const BtnWraper = styled.div`
  position: absolute;
  top: 70%;
  right: 0;
  bottom: 0px;
  left: 0;
  margin: auto; /*上下左右中央に*/
  height: 48px;
  width: 160px;
`;

export default TitlePage;