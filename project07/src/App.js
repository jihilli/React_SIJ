import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import NotFound from './components/NotFound';
import MyPage from './components/MyPage';
import ProductDetail from './components/ProductDetail';

function App() {

  /*
    React Router를 사용해보자!
    1. react router dom 설치
      npm i react-router-dom

    2. BrowserRouter 
    -> index.js로 가서 App을 BrowserRouter로 감싸기!
    -> react router를 사용하기 위해서라면 '필수'

    3. Routes - Route
      - Routes : 여러 Route(경로)들을 감싸서, 
                 하위 Route 중 조건에 맞는 Route 하나만 렌더링 해주는 역할
                 과거에는 Switch라는 문법의 이름으로 사용
                 ex) 유저 "나 메인페이지 줘"
                      Routes "ㅇㅋ, 메인페이지 줄게"
      - Route : 여러 경로
                필수 속성이 2가지 (path, element)
                path (경로) : 사용자가 이렇게 요청을 했을 때~
                element(컴포넌트) : 어떤 컴포넌트를 보여주세요~

  */
  return (
    <div className="container">
      <h1>Welcom to React Router!</h1>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<ProductDetail/>}></Route>

        {/* path가 *라면, 위의 경로 이외에 경로들을 처리 */}
        {/* -> 위에 두 조건에 전부 해당되지 않으면 여기로 들어가줘~라는 뜻 */}
        <Route path='*' element={<NotFound/>}></Route>
       
      </Routes>
     {/* Route는 경로에 따라 달라지는 값이니깡,,  
     routes 밖에 main 넣어줘버리면 어딜가나 그른다! */}
      
    </div>
  );
}

export default App;
