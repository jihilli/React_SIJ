import React, { useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'


const ProductList = ({list, setList}) => {
    /* Mission!
        1) public 안에 두었던 bestList.json 값을 가지고 올 것
            => axios 이용, useEffect 이용 , useState 배열 이용
        2) 가지고 온 데이터를 state값 관리
            => map 함수 , props 처리
            (index 값도 가지고 오는 게 좋음~내가 클릭한 애가 무엇인지~)
     */

    useEffect(()=>{
      axios.get('http://localhost:3000/bestList.json')
      .then((res)=>{
        console.log('res :' , res.data.list);
        setList(res.data.list)
      })
    },[]) 
    // -> 비어있으면, 화면이 완성되면 설정해달라는 뜻
    // -> 화면이 마운트되었을 때 저 bestList.json을 가져오겠다는 뜻!

  return (
    <div className='list-container'>
      {list.map((item,idx)=>(
        <ProductItem key={item.no} item={item} idx={idx}/>
      ))}
    </div>
  )
}

export default ProductList