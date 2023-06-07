import React, { useContext } from 'react'
import { ColorContext } from '../context/Ex02ColorContext';

const Ex02ColorList = () => {
    // 색상들을 배열에 넣어주기
    let color = ['red','orange','yellow','green','blue'];

    /*
    context 안에 있는 데이터가 필요하다면? useContext() 활용!
    */

    const { setChoiceColor } = useContext(ColorContext);

  return (
    // 똑같은 걸 반복하는 거니까 map함수로 구현해야 함!
    <div style={{display : 'flex'}}>
        {color.map(item =>
            <div 
            // 버튼으로 선택한 컬러를 setChoiceColor안에 담아주기
            onClick={(e)=>{setChoiceColor(e.target.style.backgroundColor);}} 
            key={item} style = {{
                width : '100px',
                height : '100px',
                backgroundColor: `${item}`
            }}> </div>
         )}
    </div>
  )
}

export default Ex02ColorList