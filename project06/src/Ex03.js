import React, { useEffect } from 'react'
import { useState } from 'react';

const Ex03 = () => {
    /* 참참참 게임을 만들어보자!
        1. 나-공격, 컴-수비
        2. 버튼 클릭 시 나와 컴퓨터 선택이 같으면 내 승리
        3. 나와 컴퓨터 선택 다르면 컴퓨터 승

        문제풀이 STEP
        1. 필요한 state들을 관리(내 선택, 컴퓨터선택, 게임결과)
            => useState
        2. 내 선택 => 내가 누른 버튼의 내용을 선택으로 삼는다
            => 이벤트 객체
        3. 컴퓨터의 선택 => 랜덤하게 받아올 것 (pos라는 배열에서)
            => 난수 뽑기
        4. 만약 내 선택에 해당하는 state값이 변하면, 승패를 판별해줄 것
            => useEffect
        5. 게임이 시작하기 전에는 '게임결과 : 패배~' 부분이 나오지 않도록 할 것
            => 조건부 렌더링
    */
    let pos = ['좌', '정면', '우']

    const [myChoice, setMyChoice] = useState('');
    const [comChoice, setComChoice] = useState('');
    const [result, setResult] = useState('');

    const ckBtn = (e)=>{
        // 나의 선택 == 내가 선택한 버튼의 내용을 MyChoice에 집어넣기
        console.log('ck Btn', e.target.innerText);
        setMyChoice(e.target.innerText)

        // 컴퓨터 선택 세팅
        let ranNum = parseInt(Math.random()*3)
        console.log('ranNum : ', pos[ranNum]);
        setComChoice(pos[ranNum])
        // -> 배열로 랜덤값 넣어줌.
    }

/* useEffect를 이용해서 정확한 시점 파악 => 게임 판별 */
    useEffect(()=>{
        // 게임 결과 판별
        myChoice == comChoice ? setResult('승리') : setResult('패배')
    },[myChoice, comChoice]) 

  return (
    <div>
        <h1>참참참 게임!</h1>
        <h3>나의 선택 : {myChoice}</h3>
        <h3>컴퓨터의 선택 : {comChoice}</h3>

    {/* myChoice 안에 특정 결과가 있어야만 뜬다 */}
        {myChoice && <h3>게임 결과 : {result}</h3>}
        {pos.map(item =>  <button onClick={ckBtn} key={item}>{item}</button>)}

    </div>
  )
}

export default Ex03