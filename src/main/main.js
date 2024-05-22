import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import nsulogo from "./nsulogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import { data } from "jquery";
const Main = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const Response = await axios.post(`${awsIP}/main`);
        setCounter(Response.data);
        console.log(Response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCounter();
  }, []);

  const awsIP = process.env.REACT_APP_BACKEND_URL;


  return (
    <div>
      <div id="content">
        <img src={nsulogo} alt="로고" id="nsulogo" />
        <div id="contentFlex">
          <div className="title">NSU LIKELION 2024</div>
          <div className="title">개발자 성향 테스트</div>
          <div id="btnWrapper">
            <Link to="/test" className="title ">
              <span className="mainBtn testBtn">
                테스트 <FontAwesomeIcon icon={faLocationArrow} />
              </span>
            </Link>
            <Link to="/inquiry" className="title ">
              <span className="mainBtn inquiryBtn">
                문의 <FontAwesomeIcon icon={faLocationArrow} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div id="visitCounter">방문자수 : {counter}</div>
    </div>
  );
};
export default Main;