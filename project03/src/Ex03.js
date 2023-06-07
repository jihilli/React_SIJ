import {useState} from 'react';

const Ex03 = () => {
    /*
    1) 랜덤수 추출
    2) 내가 누른 버튼의 숫자 구하기
    3) 1과 2를 비교 
        - 동일하면 <p>정답입니다!
        - 다르다면 땡!
    각각 변화하는 수들은 바로 화면에 보여지게 하기
    */

    /*
    Math.random()*원하는개수+시작하는 숫자
    1~10 : Math.random()*10+1
    */

const [num, setNum] = useState();
const[ranNum, setRanNum] = useState();
const [result, setResult] = useState('');

const btnCk = (e)=>{
    // 내가 선택한 수 세팅 : e.target.innerText
    console.log(e);
    setNum(e);
    // 랜덤한 수 세팅
    setRanNum(parseInt(Math.random()*3+1));
    // 결과 세팅
  (num==ranNum)?setResult('정답입니다!'):setResult('땡!');

    /* ---------> 라이프사이클 세팅해줘야 함! */
}

  return (
    <div>
        <button onClick={()=>btnCk(1)}>1</button>
        <button onClick={()=>btnCk(2)}>2</button>
        <button onClick={()=>btnCk(3)}>3</button>

        <div>
            <p>내가 입력한 숫자 : {num}</p>
            <p>랜덤숫자 : {ranNum}</p>
            <p>{result} </p>
        </div>
    </div>
  )

  

}

export default Ex03