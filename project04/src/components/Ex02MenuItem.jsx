import React from 'react'
import menu from '../menu.json'

const Ex02MenuItem = () => {

    let newMenu = menu.list.map(item=><td key={item.name}>{item.name}</td>);
    let newPrice = menu.list.map(item=><td key={item.name}>{item.price}</td>);
    let newContent = menu.list.map(item=><td key={item.content}>{item.content}</td>);
    let newSrc = menu.list.map(item=><td><img key={item.imgSrc} src={item.imgSrc} width="300px"></img></td>);


  return (
    <div>
        {/* <img src='https://cdn.imweb.me/thumbnail/20230412/72ab39bf2c337.jpg'
             width='300px'/>
        <p>
            <span>카라멜 커스터드 푸딩</span>{" "}
            <span>4,000원</span>
        </p>
        <p>SNS에서 so hot 했던 소문의 문익점 푸딩이 바로 요녀석!😎</p> */}
    
            {newSrc}
            {newMenu}
            {newPrice}
            {newContent}

    </div>
  )
}

export default Ex02MenuItem