import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// BrowserRouter를 사용할 수 있도록 라이브러리를 불러온다
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>	{/* App 태그를 BrowserRouter 태그로 감싸준다.  */}
      <App />
    </BrowserRouter>
);