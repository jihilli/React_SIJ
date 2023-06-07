import React, { useContext } from 'react'
import { TodoContext } from '../context/Ex04TodoContext'

const Ex04ListItem = ({todo, index}) => {

    // 단일요소일 때 사용하는 문법!
    // const {todos} = useContext(TodoContext)
    // console.log('todos:', todos);

    const{ handleTodoToggle, handleTodoDelete } = useContext(TodoContext);

  return (
    <div>
        <input type='checkbox' id='todo-item'
            onChange={()=>{handleTodoToggle(index)}}
        ></input>
        {/* htmlFor : 이거 html을 위한 for이야! 라고 해줘야 함 */}
        <label 
                style={{
                    textDecoration : 
                        todo.completed ? "line-through" : "none"
                }}
        >{todo.text}</label>
        {/* -> 이 배열을 또 다시 반복시켜줘야 하는데?! */}
        <button onClick={()=>{handleTodoDelete(index)}}>삭제</button>
    </div>
  )
}

export default Ex04ListItem