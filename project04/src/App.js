import logo from './logo.svg';
import './App.css';

function App() {

  let students = [
   {name : 'Jean', age : 23, gender : 'male'},
   {name : 'Tatiana', age : 36, gender : 'female'},
   {name : 'Stephan', age : 51, gender : 'male'},
   {name : 'Rosalia', age : 41, gender : 'female'}
  ];

  /* Map 함수
  - 주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다
    ex) students라는 배열의 이름만 뽑아서 새로운 함수를 만들고 싶어!
  - 기존 배열은 영향을 받지 않는다
  - key값을 꼭 작성해야 한다.
    이 때, key값은 서로 중복X 고유한 값이어야 함
  */
  let newStudents = students.map(item=><button key={item.name}>{item.name}</button>);
  
  let intro = students.map(item=><p key={item.name}>
    안녕하세요. 제 이름은 {item.name}입니다. 제 나이는 {item.age}살 입니다.</p>)

  console.log('new : ',newStudents);

  /* 간단한 예제! 
  안녕하세요 저는 {name}입니다. 제 나이는 {age}살 이예요. */

  // ======================== Filter =========================
  let femaleList = students.filter(item => item.gender == 'female');
  console.log('female List : ', femaleList);
  
  return (
    <div>

      <h2>Map함수 </h2>

      {newStudents}
      {/* {intro} */}
      {students.map(item =>
      <p key={item.name}>안녕하세요. 제 이름은 {item.name}입니다. 제 나이는 {item.age}살 입니다.</p>)}
      <hr/>

      <h2>Filter함수</h2>

      {/* filter함수는 배열의 각 요소에 대해서 주어진 함수의 
      결과값이 true인 요소들만 모아서 새로운 배열로 반환하는 함수를 의미한다. */}
      {femaleList.map(item => <p key={item.name}>{item.name}이구요, {item.age}살 입니다.</p>)};


      </div>
  );
};

export default App;