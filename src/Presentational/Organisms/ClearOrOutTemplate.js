import React from "react";
import styled from 'styled-components';
import CommonBtn from "../Atoms/CommonBtn";
import out_1Img from '../../img/out_1.jpg';
import out_2Img from '../../img/out_2.jpg';
import clear_1Img from '../../img/clear_1.jpg';
import clear_2Img from '../../img/clear_2.jpg';

const ClearOrOutTemplate = (props) => {

  let img = clear_1Img;
  if(props.num === 0){
    img = clear_1Img;
  }else if(props.num === 1){
    img = out_1Img
  }else if(props.num === 2){
    img = clear_2Img
  }else if(props.num === 3){
    img = out_2Img
  }

 return(
  <WholeWraps img={img}>

      <BtnWraper>
        <CommonBtn text={props.text}/>
      </BtnWraper>
    </WholeWraps>
 )
};

const WholeWraps = styled.div`
  //display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;

  /* 画像ファイルの指定 */
  background-image: url(${(props) => props.img});
  
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

export default ClearOrOutTemplate;