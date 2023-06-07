// rafce + Enter

import React from 'react'
import Member from './MemberBox/MemberBox';
import './AppExample.css';
const AppExample = () => {
    /* 팀원소개
    이름: 
    성별 : 여성/남성 => 변수화 시켜주는 게 편함!
    좋아하는 노래: 

    단, Componenet와 props의 개념을 이용할 것~!
    - MemberBox라는 컴포넌트를 생성하기
    */
    let {M,F} = {
      M :'남성',
      F :'여성'
    }
  
  return (
    <div>
        <Member name="김다운" gender={M} singer="아이유" song="새신발" ></Member>
        <Member name="신지훈" gender={M} singer="빅뱅" song="cafe"></Member>
        <Member name="윤영현" gender={M} singer="윤하" song="사건의지평선"></Member>
        <Member name="이지희" gender={F} singer="뉴진스" song="Ditto"></Member>
    </div>
  )
}

export default AppExample