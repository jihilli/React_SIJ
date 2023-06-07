import React, { useState } from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import { ThemeContext } from './context/Ex03ThemeContext'
// -> ThemeContext import

const Ex03 = () => {
    /*
1. 유저가 다크모드를 클릭 시 배경은 검정색, 글자색은 흰색으로 
2. 유저가 한번 더 다크모드를 클릭 시, 다시 배경은 흰색 글자색은 검정색으로 돌아오도록 
3. context 를 사용할 것 
4. const [isDark, setIsDark] = useState(false)

** 오류 종류 
1) useState is not defined or useContext is not defined 
- import 를 안했거나 오타가 난 경우입니다.
2) [Object Object] .. 객체 안에 작성을 해야하는데 중괄호를 안쓴 경우 
3) npm start 가 안돼요 => 경로 다시 확인하기
4) 'ThemeContext' 라는 이름의 context 파일이 하나 있어야 합니다 - createContext 용도 
   => 이름은 달라도 됨 
    */

  // 어플리케이션의 Theme과 관련된 데이터 
  // => 전역적으로 사용/관리 => context

  const [isDark,setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
       {/* -> 전역적으로  데이터 보내주기*/}
      <div>
          <Ex03Header/>
          <Ex03Main/>
      </div>
    </ThemeContext.Provider>
  )
}

export default Ex03