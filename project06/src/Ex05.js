import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Ex05.css'

const Ex05 = () => {

/*
key : d98ae2c3057b1f588501393dc077fc5f
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/

let cityList = ['GWANGJU', 'SEOUL', 'TOKYO', 'PARIS', 'NAIROBI']

const [city, setCity] = useState('GWANGJU')
const [temp, setTemp] = useState("0")
const [icon, setIcon] = useState("")
const [cloud, setCloud] = useState("")

    const getCity = (e)=>{
        console.log('get City', e.target.innerText)
        setCity(e.target.innerText)
    }

    const getData = ()=>{
        console.log('get Data');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d98ae2c3057b1f588501393dc077fc5f`
        axios.get(url)
        .then(res => {
            console.log('res :',res.data.main.temp)

        // 온도세팅 : 켈빈온도 - 273 == 섭씨온도
        setTemp((res.data.main.temp-273).toFixed(2))

        // 구름 세팅
        if(res.data.clouds.all>90){
            setCloud("매우흐림")
        } else if (res.data.clouds.all>60){
            setCloud("흐림")
        } else {
            setCloud("맑음")
        }

        // 아이콘 세팅
        setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
        }
    )}

    /* 임시코드!
    
    Mission!
    -버튼을 클릭 했을 때 해당 도시로 날씨 데이터가 변경되도록 해보자
    1. 버튼을 클릭했을 때 -> getCity라는 함수
    - getCity의 값을 구했을 때 getData로 가기
    2. city의 이름이 변했을 때 , city에 맍는 데이터가 들어오도록 하기
    3. 단, 아무것도 클릭하지 않고 단순히 화면이 뜬 상태라면 gwangju의 데이터!
    */
    useEffect(()=>{
        getData()
    },[city])
    // -> [city] : city값이 변화할 때 화면을 렌더링 해준다는 뜻!

  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨날씨</h1>
            <div className='weather-data'>
                <img src={icon} width="100px"></img>
                <h1>{temp}</h1>
                <h3>{city}</h3>
                <h4>{cloud}</h4>
            </div>
            <div>
            {cityList.map(item=><button key={item} onClick={getCity}>{item}</button>)}
            </div>
        </div>
    </div>
  )
}


export default Ex05