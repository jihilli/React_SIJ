import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

const Ex04 = () => {

    let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230501'

    /* 화면에 영화 랭킹을 띄워주자!
        => 네트워크 요청을 위해 사용하는 API
    - jQuery + AJax => 논외
    - Fetch API (New!) > JS제공, 별도의 설치X
    - Axios (New!)
    */

    /* 왜 API를 가지고 오는 것을 useEffect 안에 넣어줄까?
        - useEffect의 순서는 화면이 마운트 된 이후!
        - 화면이 먼저 뜨고 -> 데이터를 가지러 감
        - 사용자 입장에서 조금 더 빠른 환경을 제공
    */

    const [list, setList] = useState([])
    
    useEffect(()=>{
    // Case1 ) Fetch API
    /*
    fetch(movieUrl) // "movieUrl 에 있는 데이터 내가 요청할게~"
    .then(res => res.json()) // "받아온 데이터를 json 형태로 반환해줘~"
    .then(res => {console.log('fetch res :' , res.boxOfficeResult.dailyBoxOfficeList)
    setList(res.boxOfficeResult.dailyBoxOfficeList)
    })
    .catch(()=>{console.log('error!')}) // try~catch 의 그 catch!

    */

    /* Case2) Axios 라이브러리
    (1) axios 설치 - npm install axios (-> 줄임말 : npm i axios)
    (2) import axios from 'axios'
    */

    axios.get(movieUrl)
    .then(res => { // 얘는 애초에 json으로 들어오기 때문에
        console.log('Axios Res :', res.data.boxOfficeResult.dailyBoxOfficeList)
        setList(res.data.boxOfficeResult.dailyBoxOfficeList)   
    })
    .catch(()=>{console.log('error!');})

    /*
    ** Axios vs Fetch
    (1) Fetch
    - 장점 
        a. JS의 내장 라이브러리! 굳이 설치/import할 필요X
        b. 내장 라이브러리이기 때문에 업데이트에 영향을 받지X  
    - 단점
        a. 지원하지 않는 브라우저가 존재했었음(익스플로러11)
            => jQuery+ajax 흥했던 이유
        b. JSON으로 변환해주는 과정이 필요하다
        c. axios에 비해 기능이 적다

    (2) Axios
    - 장점
        a. 기능이 많다
        b. 크로스 브라우징 최적화(다양한 브라우저 지원)

    - 단점
        a. 설치 필요


    */




    },[])




  return (
    <div className='container'>
        <h1>영화 순위</h1>
        {list.map(item => <p>{item.rank} . {item.movieNm} . {item.openDt}</p>)}

    </div>
  )
}

export default Ex04