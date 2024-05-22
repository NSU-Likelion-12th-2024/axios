import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AdminPage.css"; 


const awsIP = process.env.REACT_APP_BACKEND_URL;

const AdminQuestionList = () => {
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    // 질문 목록을 가져오는 요청을 보냅니다.
    axios.get(`${awsIP}/admin/question-forms`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  return (
    <div>
      <h2>질문 목록</h2>
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>사용자 </th>
            <th>이름 </th>
            <th>상세 정보 </th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.user}</td>
              <td>{question.userName}</td>
              <td>{question.userDetail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AdminQuestionDetail = ({ match }) => {
  const [question, setQuestion] = useState(null);
  const questionId = match.params.id;

  useEffect(() => {
    // 특정 질문의 상세 정보를 가져오는 요청을 보냅니다.
    axios.get(`${awsIP}/admin/question-forms/${questionId}`)
      .then(response => {
        setQuestion(response.data);
      })
      .catch(error => {
        console.error('Error fetching question details:', error);
      });
  }, [questionId]);

  return (
    <div>
      <h2>질문 상세 정보</h2>
      {question ? (
        <div>
          <p><strong>ID:</strong> {question.id}</p>
          <p><strong>사용자:</strong> {question.user}</p>
          <p><strong>사용자 이름:</strong> {question.userName}</p>
          <p><strong>사용자 상세 정보:</strong> {question.userDetail}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { AdminQuestionList, AdminQuestionDetail };
