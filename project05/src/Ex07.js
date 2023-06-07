import React, { useRef } from 'react'

const Ex07 = () => {

    /*
    1) 사용자가 input 태그 안에 입력한 값을 가져오기
    2) 그 값에 따라서 사진의 src 속성을 변경하기
    */

  const textRef = useRef();
  const imgRef = useRef();

  const chImg = ()=>{
    console.log('change Img Function', textRef.current.value);
    textRef.current.value == '미나'
        ? imgRef.current.src = 'https://blog.kakaocdn.net/dn/PUa2v/btq090sscv3/PgrGkYWckKB80WdOAvaxS0/img.gif'
        : imgRef.current.src = 'https://media.tenor.com/sJwfvFZZVWgAAAAS/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4-%EB%82%98%EC%97%B0.gif'

    textRef.current.value = ""
    textRef.current.focus();


  }

  return (
    <div>희망하는 사진이 있으신가요?
        <input type='text' ref={textRef}/>
        <button onClick={chImg}>변경!</button>
        <div>
            <img 
                src="https://media.tenor.com/sJwfvFZZVWgAAAAS/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4-%EB%82%98%EC%97%B0.gif"
                width='200px'
                ref={imgRef}
                ></img>

        </div>
    </div>
  )

  }

export default Ex07