import React, { useState } from "react";
import styled from 'styled-components';
import clear3_1Img from '../../img/clear3_1.jpg';
import clear3_2Img from '../../img/clear3_2.jpg';
import clear3_3Img from '../../img/clear3_3.jpg';
import clear3_4Img from '../../img/clear3_4.jpg';
import CommonBtn from "../Atoms/CommonBtn";

import successM from "./../../music/aSuccess.mp3";

const Lv3ClearPage = () => {
  const [flagOne,setFlagOne] = useState(true);
  const [flagTwo,setFlagTwo] = useState(true);
  const [flagThree,setFlagThree] = useState(true);
  const [flagFour,setFlagFour] = useState(true);

  setTimeout(() => {setFlagOne(false)}, 1500)
  setTimeout(() => {setFlagTwo(false)}, 3000)
  setTimeout(() => {setFlagThree(false)}, 4500)
  setTimeout(() => {setFlagFour(false)}, 6000)

  const goPage = () => {
    window.location.href = '/game/all/clear';
  }

  const playSound = (Mfile) => {
    const audio = new Audio(Mfile);
    audio.volume = 0.1
    audio.play();
    audio.currentTime = 0
    console.log('play');
  }

  playSound(successM);

  return(

    <AllWrap>
      <FirstBackground />
      <SecondBackground flag={flagOne}/>
      <ThirdBackground flag={flagTwo}/>
      <ForthBackground flag={flagThree}/>
      <BtnWraper flag={flagFour}>
        <CommonBtn text="おわり" clickedFn={goPage} />
      </BtnWraper>
    </AllWrap>

  );
};
const AllWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const FirstBackground = styled.div`
  //display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;

  /* 画像ファイルの指定 */
  background-image: url(${clear3_1Img});
  
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
  background-image: url(${clear3_2Img});
  
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
const ThirdBackground = styled.div`

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
  background-image: url(${clear3_3Img});
  
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
const ForthBackground = styled.div`

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
  background-image: url(${clear3_4Img});
  
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
  top: 70%;
  right: 0;
  bottom: 0px;
  left: 0;
  margin: auto; /*上下左右中央に*/
  height: 48px;
  width: 160px;
`;


export default Lv3ClearPage;