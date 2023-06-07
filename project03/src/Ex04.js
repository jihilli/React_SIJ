import { useState } from 'react';
import Board from './components/Ex04Board'
import './style/ex04.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex04 = () => {

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

    // 이미지 경로 가져오기! (public폴더 이용할 때만 가능한 방법)
    // -> 반복되는 이미지 경로 자체를 변수로 지정(뒤에 숫자만 바꾸면 되니까)

    // 주사위 숫자
    const [myDice, setMyDice] = useState(1);
    const [comDice, setComDice] = useState(1);

    // 이미지 경로
    let imgPath = '/img/dice';

    const[myPath, setMyPath] = useState(imgPath+'1.png');
    const[comPath, setComPath] = useState(imgPath+'1.png');

    // 현재 점수
    const [myScore, setMyScore] = useState(0);
    const [comScore, setComScore] = useState(0);

    const makeRandom=()=>{
        return parseInt(Math.random()*6+1);
    }

    //throwDice 보다 위에 작성하는 이유? 
    // -> throwDice에서 리셋을 가져와서 사용해야 하기에
    // 호이스팅 현상을 방지하기 위해 const에 화살표 함수 넣어서 사용함!
    // -> 나중에 동료가 같은 이름으로 변수 만들기 않도록
    const makeReset = ()=>{
        setMyDice(1);
        setComDice(1);
        setComPath(imgPath+'1.png');
        setComPath(imgPath+'1.png');
        setMyScore(0);
        setComScore(0);
    }

    const throwDice = ()=> {
        setMyDice(makeRandom());
        setComDice(makeRandom());
        setMyPath(imgPath+myDice+'.png');
        setComPath(imgPath+comDice+'.png');

        if(myScore <= 4 && comScore <= 4) {
            if(myDice > comDice) {
                setMyScore(myScore+1);
            } else if(myDice < comDice) {
                setComScore(comScore+1);
            }
        } else { //게임 끝
            let result = myScore>comScore?'승리':'패배';
            alert('게임이 종료되었습니다. 당신의'+result+'입니다');
            makeReset();
        }
    }
   
  return (
    <div className='container'>
        <h3>주사위게임</h3>
        <div className='btn-container'>
            <Button variant="secondary" onClick={throwDice}>던지기!</Button>
            <Button variant="danger" onClick={makeReset}>RESET</Button>
        </div>

        <div className='board-container'>
            <Board path={myPath} name="나" score ={myScore} dice={myDice}/>
            <Board path={comPath} name="컴" score ={comScore} dice={comDice}/>
        </div>
    </div>
  )
}

export default Ex04