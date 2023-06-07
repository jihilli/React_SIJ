import { useState } from "react"

const Ex04Prcatice = () => {
      /* 주사위 게임을 만들어보자!
        1) user가 '던지기!' 버튼을 클릭한다. 
        2) 유저의 주사위 숫자가 랜덤으로 표시된다. 
        3) 컴퓨터의 주사위 숫자 또한 랜덤으로 표시된다. 
        4) 유저의 주사위 숫자 - 컴퓨터의 주사위 숫자를 비교 
            3-1) 내가 이겼을 경우는 나의 점수 + 1
            3-2) 내가 졌을 경우는 컴퓨터의 점수 + 1 
        5) 먼저 5점을 낸 사람이 최종 승리 
            => alert 당신의 승리입니다! 당신의 패배입니다! 
        6) RESET 버튼을 클릭 시, 모든 내용이 초기화 
            - 점수, 이미지 경로, 이미지 파일 번호 

        HINT!! 필요한 정보들 
        - 주사위 숫자 (나, 컴퓨터)
        - 이미지 경로 (나, 컴퓨터)
        - 점수 (나, 컴퓨터)
        ===> Board의 props 데이터로 
    */

    // 내 주사위 숫자, 컴퓨터 주사위 숫자
    const [myDice, setMyDice] = useState(0);
    const [comDice, setComDice] = useState(0);

    // 내 이미지, 컴퓨터 이미지
    // '/img/dice1.png'
    let path='/img/dice';
    const [myPath, setMyPath] = useState(path+'1.png');
    const [comPath, setComPath] = useState(path+'1.png');
    
    // 내 점수, 컴퓨터점수
    const [myScore, setMyScore] = useState(0);
    const [comScore, setComScore] = useState(0);

    const throwDice = ()=>{
        let path='/img/dice';
        // 1. 던지기 눌렀을 때 경로 설정
        let myNum = Math.random()*6+1;
        let comNum = Math.random()*6+1;

        setMyDice(myNum);
        setMyPath(path+myNum+'.png');
        setComDice(comNum);
        setComPath(path+comNum+'.png');

        // 2. 점수 설정
        // 1) 내 승리
        // 2) 컴퓨터 승리
    }

  return (
    <div className="div-contaier">
        <h1>주사위게임</h1>
        <button onClick={throwDice}>던지기!</button>        
        <button>RESET!</button>
        <div>
            <h3>나</h3>
            <img src={myPath}></img>
            <h3>나의 점수는? {myScore}</h3>
        </div>
        <div>
            <h3>컴퓨터</h3>
            <img src='/img/dice1.png'></img>
            <h3>컴퓨터의 점수는? {comScore}</h3>
        </div>
    </div>
  )
}

export default Ex04Prcatice