import logo from './logo.svg';
import './App.css';

function App() {
  /*
  JSX ; 하나의 파일 안에 HTML문법과 JS 문법을 동시에 작성할 수 있는 파일확장자
    => document 객체에 별도로 접근 X
    => 가독성이 좋고 기능별로 분류하기 쉽다

  ** JSX 규칙
  1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸주어야 한다.
    +) div가 아니어도 상관없다. <></>
  2. 표현식 사용가능
    JS문법을 사용  => return문 안에서 {} 안에 작성
    단, {}내에 if문은 사용할 수 없다.

    - 조건이 하나일 때 && 연산자 사용 {} 안에
    - 조건이 두 개일 때? 삼항연산자
      조건 ? 실행문1(true) : 실행문2
    - 조건이 세 개 이상일 때는 조건문을 표현식이 아닌, return 위쪽에서 사용

  3. 기존 html 문법과 다른 점들 정리
      a. class 대신 className을 사용한다. (ctrl+h -> 한꺼번에 변수명 변경)
      b. html태그 (DOM요소)를 사용할 때는 무조건 소문자로 시작!
          그 이유는 대문자는 따로 쓸 일이 있음!
      c. content가 없더라도 끝태그를 생략할 수 없다

  4. 스타일링 적용
    a. css안에 작성
      - import 되어있는 css에 삽입
    b. 객체 형태로 작성
      - 객체 형태로 원하는 스타일을 작성
      - 원하는 태긑의 style 속성으로 객체 입력
      단, 객체 안에서는 camelCase로 작성
      에를 들어, css에서는 background-color라고 작성한다면, 객체 내에서는 backgroundColor 라고 작성해야 함!
      
  */

  const txtStyle = {
    color : 'blue',
    fontWeight : '900'
  }

  let name = '선영표';
  let state = 'open';
  let text = "";


  // 3. 조건문이 세 개 이상일 때
  if(name === '강예진') {
    text = "DB"
  } else if (name === '선영표') {
    text = "Front-End"
  } else {
    text = "Back-End"
  }

    // index.js 에 있는 React.StgrictMode를 켜놓으면 코드가 두번 씩 실행됨!
  console.log('현재 방문한 사람은' , name);

  return (
    <div className='container'>  
      <p style={txtStyle}>이지희의 리액트 홈페이지에 오신 것을 환영합니다!</p>
      {/* 1. 조건이 하나일 때 */}
      {/* {state === 'open' && <p>{name}님 반갑습니다!</p> } */}

      {/* 2. 조건이 두 개일 때 */}
      {state === '강예진' 
      ? <p>{name}님 반갑습니다!</p> 
      : <p>죄송합니다. 이용하실 수 없습니다.</p>}

      {/* 3. 조건이 세 개일 때  */}
      {text}

    </div>
  );
}

export default App;
