import React, { useContext } from 'react'
import Ex04ListItem from './Ex04ListItem'
import { TodoContext } from '../context/Ex04TodoContext';

const Ex04List = () => {

    const {todos} = useContext(TodoContext);

  return (
    <div>
        {/* <input type='checkbox' id='todo-item'></input> */}
        {/* <label for='todo-item'>물마시기</label> */}
        {/* <button>삭제</button> */}
        {/* -> 얘는 반복되는 애니까 componenet로 만들어줘야 함~~ 
            그래서 , Ex04ListItem.jsx로 컴포넌트化*/}
        {todos.map((item, idx) =>
            // 키 값은 절대 중복되지 않을 값을 넣어줘야 함!
            <Ex04ListItem 
                todo={item} index={idx} key={item.text+idx}/>
        )}
    </div>
  )
}

export default Ex04List