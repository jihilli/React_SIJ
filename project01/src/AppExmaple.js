function AppExample() {
    /* 
    (1) 사용자에게 이름 입력받기 -> prompt
    (2) 현재 날짜 가져오기
    (3) 조건에 따라 계절 분류
        -3~5:봄 / 6~8:여름 / 9~11:가을 / 12~2:겨울
    (4)
    2023-05-15 : h1태그
    <hr/>태그 (수평선)
    XXX님 지금은 봄입니다. 좋은 하루 보내세요!
    */
   
    // (1) 이름 입력
    let name = prompt();
    console.log(name);

    // (2) 현재 날짜 가져오기
    let today = new Date();
    console.log('today : ', today);
    // a. 연-월-일 : .toLocaleDateString();
    let date = today.toLocaleDateString();
    console.log('date : ', date);
    // b. 월 : 
    let month = today.getMonth()+1; // 배열에 담겨서 +1 해줘야 함!
    console.log('month : ', month);

    // (3) 조건에 따라 계절 분류
    let season = '';
    if(month === 3 || month === 4 || month === 5 ) {
        season = "봄"
    } else if (month === 6 || month === 7 || month === 8 )  {
        season = "여름"
    } else if (month === 9 || month === 10 || month === 11 )  {
        season = "가을"
    } else {
        season = "겨울"
    }

    return (
        <div> 
            <h1>{date}</h1>
            <hr/>
            <p>{name}님 지금은 {season}입니다! 좋은 하루 보내세요!</p>

        </div>
    )
  
}

export default AppExample;