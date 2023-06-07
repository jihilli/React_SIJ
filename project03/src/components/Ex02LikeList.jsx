import {useState} from 'react';

const Ex02LikeList = () => {

const [num, setNum] = useState(0);
const [heart, setHeart] = useState('🤍');

// 좋아요를 조정할 수 있는 함수
  const handleLike = ()=>{
    // num값 변화
    // if(num==0) {
    //     setNum(1);
    //     setHeart('❤');
    // } else if(num==1){
    //     setNum(0);
    //     setHeart('🤍')
    // }

    (num===0)?setNum(1)&&setHeart('🖤'):setNum(0)&&setHeart('🤍');
  }

  return (
    <div>
      <span onClick={handleLike}>{heart}</span>{" "}
      <span>좋아요 {num}개</span>
    </div>
  )
}

export default Ex02LikeList