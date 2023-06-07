const MenuItem = ({name, price, menu}) => {
    console.log('App.jst에서 넘어온 값:', name, price, menu);
    // 부모요소에서 가져온 props의 객체에서 name에 접근하여 그 값을 가져옴!

    /* 
    상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
    함수의 형태이기 때문에, 둘다 값은 매개변수를 통해서 받는다
    Case 1. props => props.name
    Case 2. {name} => name

    객체 비구조화 할당
        - 객체 안의 속성만 꺼내서 마치 변수인 것처럼 사용
    ex) let props = {name : '선영표', gender : 'F'}
        => let {name, gender} = = {name:'선영표', gender:'F'}
    그 뒤로부터는 객체 안의 속성/값을 변수처럼 사용
    */
    
    return (
    //     <div>
    //         <div className="item-border">
    //             <p>{name}</p>
    //             <p>2500원</p>
    //             <h3>레모네이드</h3>
    //         </div>
    //         <div className="item-border">
    //             <p>{name}</p>
    //             <p>1500원</p>
    //             <h3>아이스아메리카노</h3>
    //         </div>
    //    </div>

    <div className="item-border">
        <p>{name}</p>
        <p>{price}원</p>
        <h3>{menu}</h3>
    </div>
    )
}


export default MenuItem;