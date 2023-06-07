import React from 'react'
import menu from './menu.json'
import MenuItem from './components/Ex02MenuItem'

const Ex02 = () => {
    console.log('menu:',menu.list);
    // let newMenu = menu.list.map(item=><p key={item.name}>{item.name}</p>);
  return (
    <div>
        <MenuItem/>
    </div>
  )
}

export default Ex02