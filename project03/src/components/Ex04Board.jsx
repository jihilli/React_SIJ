import React from 'react'

const Ex04Board = ({path, name, score, dice}) => {

  return (
    <div className='board-item'>
        <h3>{name}</h3>
        <p>{dice}</p>
        <img src={path}></img>
        <h4>현재 점수는?</h4>
        <h3>{score}</h3>
    </div>
  )
}

export default Ex04Board