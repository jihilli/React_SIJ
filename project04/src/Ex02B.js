import React from 'react'
import menu from './menu.json'
import MenuItem from './components/Ex02BMenuItem'
import './App.css';

const Ex02 = () => {
  let newList = menu.list.filter(item => item.price > 4200); 

  return (
    <div>
      <h1>전체메뉴</h1>
      <div className='menu-container'> 
        {menu.list.map(item =>
        <MenuItem key={item.name}
        name={item.name}
        price={item.price}
        content={item.content}
        imgSrc={item.imgSrc}
        />)}
      </div>
       <h1>4,200원보다 비싼 메뉴들</h1>
      <div className="menu-container">
          {/* 메뉴 가격이 4200원 이상인 메뉴만 보여주기 */}
       {newList.map(item => 
       <MenuItem
       key={item.name}
       name={item.name}
       price={item.price}
       content={item.content}
       imgSrc={item.imgSrc}
       />
       )}
      </div>
    </div>
  )
}

export default Ex02