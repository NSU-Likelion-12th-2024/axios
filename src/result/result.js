import React, { useState, useEffect } from "react";
import axios from "axios";
import "./result.css";
import { useLocation } from "react-router-dom";
import ProgressBar from "./ProgressBar.js";

const Result = (props) => {
  const location = useLocation();
  const resultScore = location.state.value;

  const [resultData, setResultData] = useState([
    {
      label: `프론트 엔드`,
      FRONT: null,
      color: "#FF6384",
    },
    { label: "디자인", DESIGN: null, color: "#36A2EB" },
    { label: "백 엔드", BACK: null, color: "#FFCE56" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("/api/getResultData"); 
        setResultData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  const totalPercentage = resultData.reduce(
    (acc, data) => acc + data.percentage,
    0
  );

  return (
    <div className="App">
      <div className="main">
        <hr />

        {resultScore < -1 && (
          <div>
            <h2>당신의 유형: 프론트엔드</h2>
            <div className="middle">
              <div className="photo_guard">
                <div className="only_photo">
                  <img className="photo" src="/img/front.jpg" alt="Front.png" />
                </div>
                <ProgressBar resultData={resultData} />
                <div className="bar-main"></div>
              </div>
              <div className="exp_box">
                <h1>프론트엔드</h1>
                <div className="explain">
                  <p>
                    프론트엔드 개발자는 사용자가 서비스를 빠르고 편리하게 이용할
                    수 있도록 웹사이트나 어플리케이션 등의 사용자
                    인터페이스(UI)를 구현하는 일을 합니다. <br></br> 이 밖에도
                    시장 점유율을 높이기 위해 다양한 운영 체제, 브라우저에서
                    모두 작동되는 사이트를 만들거나, 각각의 운영체제, 브라우저에
                    최적화된 웹사이트나 앱을 만드는 일을 합니다.<br></br>{" "}
                    <br></br>
                    사용언어:<br></br> HTML, CSS, JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div className="go">
              <ul className="explain_a">
                <li className="">
                  <a href="/">
                    {" "}
                    <button className="explainAdd_a " type="button">
                      다시하기
                    </button>
                  </a>
                </li>
                <li>
                  <a href="/inquiry">
                    {" "}
                    <button className="explainAdd_a " type="button">
                      지원하러가기
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {resultScore >= -1 && resultScore <= 1 && (
          <div>
            <h2>당신의 유형: 디자인</h2>
            <div className="middle">
              <div className="photo_guard">
                <div className="only_photo">
                  <img className="photo" src="/img/Design.jpg" alt="컴퓨터 사진" />
                </div>
                <ProgressBar resultData={resultData} />
                <div className="bar-main"></div>
              </div>
              <div className="exp_box">
                <h1>디자인</h1>
                <div className="explain">
                  <p>
                    웹디자이너는 웹사이트를 제작하고 관리하는 일을 합니다.
                    <br></br>
                    웹사이트를 개발하고 매력적으로 디자인을 더해 웹사이트의 반응
                    속도와 직관적인 사용자 인터페이스를 구현해야 하며 웹 디자인
                    이론을 통해 오늘날의 웹이 어떤 방식으로 작동되는지 이해하는
                    과정이 필요합니다. <br></br>
                    <br></br>필요 자격증:<br></br> 정보처리기능사, 컴퓨터
                    그래픽스 운용기능사
                  </p>
                </div>
              </div>
            </div>
            <div className="go">
              <ul className="explain_a">
                <li className="">
                  <a href="/">
                    {" "}
                    <button className="explainAdd_a " type="button">
                      다시하기
                    </button>
                  </a>
                </li>
                <li>
                  <a href="/inquiry">
                    {" "}
                    <button className="explainAdd_a " type="button">
                      지원하러가기
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {resultScore > 1 && (
          <div>
            <h2>당신의 유형: 백엔드</h2>
            <div className="middle">
              <div className="photo_guard">
                <div className="only_photo">
                  <img className="photo" src="/img/Backend.jpg" alt="컴퓨터 사진" />
                </div>
                <ProgressBar resultData={resultData} />
                <div className="bar-main"></div>
              </div>
              <div className="exp_box">
                <h1></h1>
                <div className="explain">
                  <p>
                    Back-end는 우리가 볼 수 없는 영역으로 서버에서 실행됩니다.
                    <br></br>주로 웹 사이트의 서버관리와 개발 업무를 담당하며
                    DB와 OS관리도 담당합니다. <br></br>주 사용자의 요구사항을
                    데이터화하여 요구사항에 맞게 가공한 뒤 데이터를 Front-end로
                    되돌려주는 역할을 합니다.
                    <br></br>
                    <br></br>
                    사용언어:<br></br>
                    JAVA, Python, Ruby 등
                  </p>
                </div>
              </div>
            </div>
            <div className="go">
              <ul className="explain_a">
                <li className="">
                  <a href="/">
                    {" "}
                    <button className="explainAdd_a " type="button">
                      다시하기
                    </button>
                  </a>
                </li>
                <li>
                  <a href="/inquiry">
                    {" "}
                    <button className="explainAdd_a " type="button">
                      지원하러가기
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;