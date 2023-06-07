import React from 'react'
import picSrc from './img/likePic.gif'
import LikeList from './components/Ex02LikeList'

/* React에서 내부 이미지 경로 지정하는 방법
    1) src 폴더에서 이미지를 import 하기
        - import 이미지변수 from '경로'
        - <img src={이미지변수}/>
    2) public 폴더 내에 이미지를 저장하고 접근하기
        - public - img 폴더를 만든 후 파일을 보관
        - 이 때, 별도로 import는 필요X
          => public 폴더는 서버와 계속해서 통신중이기 때문에~

*/

/* 실습 문제!
STEP 1) 하트를 클릭 시, 하트가 꽉찬 하트로 변경
STEP 2) 하트를 클릭 시 좋아요 1개로 변경
STEP 3) 좋아요 상태에서 하트를 클릭 시, 다시 원래대로

*/



const Ex02 = () => {
  return (
    <div>
      <img src={picSrc} width='150px'></img>
    <LikeList/>
    </div>
  )
}

export default Ex02