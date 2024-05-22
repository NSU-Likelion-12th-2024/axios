import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./inquiry.css"; 
import { createRoot } from 'react-dom/client';


function Inquiry() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const awsIP = process.env.REACT_APP_BACKEND_URL;

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitQuestion = async (event) => {
    event.preventDefault();
     try {
            // axios를 사용하여 POST 요청을 보냅니다.
            const response = await axios.post(`${awsIP}/form/submit`, { 
              user: email,           // 요청의 본문에 포함될 데이터: 사용자 이메일
              userName: name,        // 요청의 본문에 포함될 데이터: 사용자 이름
              userDetail: content    // 요청의 본문에 포함될 데이터: 사용자 질문 내용
            }, {
              headers: {
                'Content-Type': 'application/json'  // 요청 헤더 설정: JSON 형식으로 데이터를 전송함을 명시
              }
            });
            
            // 서버로부터의 응답 상태를 확인합니다.
            if (response.status === 200) {
              // 응답 상태가 200 (성공)인 경우
              setSubmitMessage('질문이 성공적으로 전송되었습니다.');  // 성공 메시지 설정
            } else {
              // 응답 상태가 200이 아닌 경우
              setSubmitMessage('질문 전송 실패했습니다. 다시 시도해주세요.');  // 실패 메시지 설정
            }
          } catch (error) {
            // 예외가 발생한 경우 (네트워크 오류, 서버 오류 등)
            console.error('질문 전송 실패:', error);  // 오류 내용을 콘솔에 출력
            setSubmitMessage('질문 전송 실패했습니다. 다시 시도해주세요.');  // 실패 메시지 설정
          }
          
          // 요청 후 입력 필드를 초기화합니다.
          setEmail('');   
          setName('');
          setContent('');
        }    
        
      
      

   
  return (
    <div className="custom-body">
      <main className="custom-main">
      <section className="custom-question">
          <h2>질문 남겨주세요 !</h2>
          <div>
          성향 테스트의 질문도 동아리에 대한 질문도 괜찮아요! <br />
          편하게 질문해주세요! 지원 링크는 맨 아래에 있습니다 !
        </div>
          <br/>
          <div>
            <form onSubmit={(event) => handleSubmitQuestion(event)}>
            <div className="custom-input-container">
              <div aria-label="이메일 또는 전화번호">이메일 또는 전화번호</div>
              <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} className="custom-email-input text-input"  placeholder="답변받을 이메일이나 전화번호를 입력해주세요!" />
            </div>
            <div className="custom-input-container">
              <div aria-label="이름">이름</div>
              <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="custom-name-input text-input"  placeholder="실명이 아니어도 괜찮습니다!" />
            </div>
            <div className="custom-input-container">
              <div aria-label="질문 내용">질문 내용</div>
              <textarea id="content" name="content" rows="10" value={content} onChange={handleContentChange} className="custom-content-input"  placeholder="질문 내용을 입력해주세요!"></textarea>
            </div>
            <div className="custom-input-container">
                <input type="submit" value="질문 등록" className="custom-orange-button" />
              </div>
            </form>
          </div>
          <div>{submitMessage}</div>
        </section>
      </main>

      
    </div>
  );
}

export default Inquiry;

