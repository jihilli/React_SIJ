import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. map 함수 예제
// import App from './App';

// 2. map 함수 실습
// import App from './Ex02.js';

// 3. map 함수 실습 (영표쌤 코드)
import App from './Ex02B.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();