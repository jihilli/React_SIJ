import React, { useContext } from 'react'
import { ThemeContext } from '../context/Ex03ThemeContext'

const Ex03Main = () => {

  const {setIsDark, isDark } = useContext(ThemeContext)
  // -> 나 얘(isDark)를 전역적으로 사용해줄거야! 선언
  const toggleTheme = () => {
    setIsDark(!isDark) //false면 true로, true면 false로
  }

  return (
    <div style={{
      backgroundColor : isDark ? "black" : "white",
      color : isDark ? "white" : "black"
    }}>
      Ex03Main
      <br/>
      <button 
      onClick={toggleTheme}>다크모드</button>
    </div>
  )
}

export default Ex03Main