import './App.css';
import MenuItem from './Components/MenuItem';

function App() {
  /* 
    Component(컴포넌트)
    - 반복되는 코드를 하나로 묶어서 컴포넌트로 만든다
    - 내가 원하는 코드를 묶어서 '태그화' 시킨다
    **반드시 대문자로 시작을 해야한다! -> 기존 HTML태그(DOM요소)와 구분하기 위함!

    ** export - import는 필수!

    Q. Member라는 컴포넌트를 생성하자!
  */

  /* Props(프로퍼티, 프롭스)
    - 상위(부모) 컴포넌트에서 하위(자식) 컴포넌트로 값을 전달할 때 사용
    - 

  */
 let price = 2500;
  return (
    <div>
      <MenuItem name="김소희" menu="레모네이드" price={price}></MenuItem>
      <MenuItem name="이선아" menu="아이스아메리카노" price="1500"></MenuItem>
    </div>
  );
}

export default App;
