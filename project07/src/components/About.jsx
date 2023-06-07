import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


const About = () => {
    /* useNavigate
     - 페이지 이동을 도와주는 React Hooks

     (1) import {useNavigate} from 'react-router-dom'
     (2) const 변수 = useNavigate()
     (3) 페이지 이동을 해야할 때, 변수("경로")
        ex) const nav = useNavigate()
            nav("/mypage")

    */

    const nav = useNavigate()
    let auth = true;
    // true면 마이페이지, false면 main

  return (
    <div>About
        <hr/>
        {/* 만약, 회원이라면 mypage로 이동 비회원이라면 main으로 이동 */}
        <button onClick={()=>{
            auth ? nav('/mypage') : nav('/')
            }}>마이페이지</button>

        <br/>
        {/* 똑같은 내용의 반복. 나는 이게 몇 번째인지를 알고싶어! */}
        <Link to="/product/1?popular=인기">[1] 정보처리기사 스터디 구합니다. </Link>
        <br/>
        <Link to="/product/2">[2] 토익 한 달 단기 스터디 구해요~ </Link>
        <br/>
        <Link to="/product/3">[3] 같이 배드민턴 하실 분 구합니다. </Link>
        <br/>
    </div>
  )
}

export default About