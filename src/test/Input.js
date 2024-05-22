import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../test/Input.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Input = () => {
  const sliderRef = useRef(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [resultValue, setResultValue] = useState(null);
  const navigate = useNavigate();
  


  const SampleNextArrow = ({ onClick }) => {
    return (
      <div className={`arrow next arrow ${isLastSlide ? 'hidden' : ''}`} onClick={onClick}>
        <button><i className="xi-angle-right"></i></button>
      </div>
    );
  };



  const SamplePrevArrow = ({ onClick }) => {
    const slider = sliderRef.current;

    const isFirstSlide = slider ? slider.innerSlider.state.currentSlide === 0 : false;

    return (
      <div className={`arrow prev arrow ${isFirstSlide ? 'hidden' : ''}`} onClick={onClick}>
        <button><i className="xi-angle-left"></i></button>
      </div>
    );
  };

  const handleAfterChange = (currentSlide) => {
    const slider = sliderRef.current;

    if (slider) {
      const slideCount = slider.props.children.length;

      // 중복 슬라이드 체크
      if (currentSlide === slideCount - 1) {
        setIsLastSlide(true);
      } else if (currentSlide === 0) {
        setIsLastSlide(false);
      } else {
        setIsLastSlide(false);
      }
    }
  };

 

const handleFormSubmission = (event) => {
  event.preventDefault(); // 기본 제출 동작 방지

  const radios1 = document.querySelectorAll('input[name="답변1"]');
    const radios2 = document.querySelectorAll('input[name="답변2"]');
    const radios3 = document.querySelectorAll('input[name="답변3"]');
    const radios4 = document.querySelectorAll('input[name="답변4"]');
    const radios5 = document.querySelectorAll('input[name="답변5"]');
    const radios6 = document.querySelectorAll('input[name="답변6"]');
    const radios7 = document.querySelectorAll('input[name="답변7"]');
    const radios8 = document.querySelectorAll('input[name="답변8"]');
    
    
    let isChecked1 = false;
    let isChecked2 = false;
    let isChecked3 = false;
    let isChecked4 = false;
    let isChecked5 = false;
    let isChecked6 = false;
    let isChecked7 = false;
    let isChecked8 = false;

    radios1.forEach((radio) => {
      if (radio.checked) {
        isChecked1 = true;
      }
    });

    radios2.forEach((radio) => {
      if (radio.checked) {
        isChecked2 = true;
      }
    });

    radios3.forEach((radio) => {
      if (radio.checked) {
        isChecked3 = true;
      }
    });
    radios4.forEach((radio) => {
        if (radio.checked) {
          isChecked4 = true;
        }
      });
      radios5.forEach((radio) => {
        if (radio.checked) {
          isChecked5 = true;
        }
      });
      radios6.forEach((radio) => {
        if (radio.checked) {
          isChecked6 = true;
        }
      });
      radios7.forEach((radio) => {
        if (radio.checked) {
          isChecked7 = true;
        }
      });
      radios8.forEach((radio) => {
        if (radio.checked) {
          isChecked8 = true;
        }
      });

    // 선택된 라디오 버튼이 없으면 알림 표시
    const missingQuestions = [];

    if (!isChecked1) {
      missingQuestions.push('1번');
    }
    if (!isChecked2) {
      missingQuestions.push('2번');
    }
    if (!isChecked3) {
      missingQuestions.push('3번');
    }
    if (!isChecked4) {
      missingQuestions.push('4번');
    }
    if (!isChecked5) {
      missingQuestions.push('5번');
    }
    if (!isChecked6) {
      missingQuestions.push('6번');
    }
    if (!isChecked7) {
      missingQuestions.push('7번');
    }
    if (!isChecked8) {
      missingQuestions.push('8번');
    }
    
    if (missingQuestions.length > 0) {
      const missingQuestionsString = missingQuestions.join(', ');
      alert(`${missingQuestionsString} 문항에 대한 답변을 선택하세요.`);
      return;
    }
  // 선택된 라디오 버튼이 있으면 추가적인 로직 수행
  const itemValues = document.querySelectorAll('input[name^="답변"]:checked');
  const result = Array.from(itemValues).reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0);
  if (result !== null) {
    setResultValue(result);
    navigate("/result", { state: { value: result } });

    if (choice) { // choice 요소가 존재하는지 확인
      choice.addEventListener('click', function() {
        var itemValue = document.querySelector('input[name="답변1"]:checked').value;
        var itemValue2 = document.querySelector('input[name="답변2"]:checked').value;
        var itemValue3 = document.querySelector('input[name="답변3"]:checked').value;
        var itemValue4 = document.querySelector('input[name="답변4"]:checked').value;
        var itemValue5 = document.querySelector('input[name="답변5"]:checked').value;
        var itemValue6 = document.querySelector('input[name="답변6"]:checked').value;
        var itemValue7 = document.querySelector('input[name="답변7"]:checked').value;
        var itemValue8 = document.querySelector('input[name="답변8"]:checked').value;

        var result=parseInt(itemValue);
        var result2=parseInt(itemValue2);
        var result3=parseInt(itemValue3);
        var result4=parseInt(itemValue4);
        var result5=parseInt(itemValue5);
        var result6=parseInt(itemValue6);
        var result7=parseInt(itemValue7);
        var result8=parseInt(itemValue8);

    
    var allresult=result+result2+result3+result4+result5+result6+result7+result8;
        
      
    });
    }
  }

  // 예시: 폼 제출
  // event.target.submit();
};

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: handleAfterChange,
  };
  var choice = document.querySelector('.result_choice');

  const awsIP = process.env.REACT_APP_BACKEND_URL;

const handleChoiceClick = () => {
  const itemValueArray = ['답변1', '답변2', '답변3', '답변4', '답변5', '답변6', '답변7','답변8'];
  let allresult = 0;
  let isAnyOptionSelected = false;

  itemValueArray.forEach((itemName) => {
    const selectedValue = document.querySelector(`input[name="${itemName}"]:checked`);
    if (selectedValue) {
      allresult += parseInt(selectedValue.value);
      isAnyOptionSelected = true;
    }
  });

  if (isAnyOptionSelected) {
    const result = { personalityNumber: allresult };
    axios.post(`${awsIP}/result/save`, result)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('서버로 데이터 전송 중 오류 발생:', error);
      });
  } else {
    alert('질문이 선택되지 않았습니다.');
  }
};

var choice = document.querySelector('.result_choice');

if (choice) {
  choice.addEventListener('click', handleChoiceClick);
  }

  return (
     <form action='post' onSubmit={handleFormSubmission}>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
        <div className="slide">
          <div className='inner'>
          <p>1. 동물모양 쿠키 반죽을 만들던 도중, 모양이 이상한 반죽을 발견한다. 이때, 나의 행동은?</p>
          <input type='radio' value={-1} name='답변1' id='rd1' className='radio'></input>
          <label htmlFor='rd1' className='label1'><span className='num'>1.</span> 반죽을 다시 보기 좋게 만든다.</label>

          <input type='radio' value={0} name='답변1' id='rd2' className='radio'></input>
          <label htmlFor='rd2' className='label1'><span className='num'>2.</span> 이것도 어쩌면 예술작품? 가만보면 이쁠지도?</label>

          <input type='radio' value={1} name='답변1' id='rd3' className='radio'></input>
          <label htmlFor='rd3' className='label1'><span className='num'>3.</span> 처음부터 모양틀을 이용했기 때문에, 이상하게 나올 일이 없다.</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>2. 내일 당장 소개팅을 나가야만 한다. 내가 선택할 코디는?</p>
          <input type='radio' value={-1} name='답변2' id='rd1-2' className='radio2'></input>
          <label htmlFor='rd1-2' className='label2'><span className='num'>1.</span> 깔끔한 소개팅의 정석룩 코디</label>

          <input type='radio' value={0} name='답변2' id='rd2-2' className='radio2'></input>
          <label htmlFor='rd2-2' className='label2'><span className='num'>2.</span> 나의 개성을 보여주게 홍대 코디룩</label>

          <input type='radio' value={1} name='답변2' id='rd3-2' className='radio2'></input>
          <label htmlFor='rd3-2' className='label2'><span className='num'>3.</span> 후줄근한 후드티/후드집업 동네 한 바퀴 코디룩</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>3. 여행을 가기로 했습니다. 어느 곳으로 여행을 가고 싶나요?</p>
          <input type='radio' value={-1} name='답변3' id='rd1-3' className='radio3'></input>
          <label htmlFor='rd1-3' className='label3'><span className='num'>1.</span> 새로운 문화와 기술적인 경험을 즐길 수 있는 신비롭고 독특한 여행</label>

          <input type='radio' value={0} name='답변3' id='rd2-3' className='radio3'></input>
          <label htmlFor='rd2-3' className='label3'><span className='num'>2.</span> 아름다운 건축물과 자연, 문화 등을 담고 있는 예쁜 풍경의 여행지</label>

          <input type='radio' value={1} name='답변3' id='rd3-3' className='radio3'></input>
          <label htmlFor='rd3-3' className='label3 pl'><span className='num'>3.</span> 안전하고 신뢰할 수 있는 호텔, 교통 시스템 등 안정적인 인프라가 갖추어진 여행지</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>4. 친구 생일 파티에 참석하기로 했습니다. 어떤 유형의 선물을 준비할 건가요?</p>
          <input type='radio' value={-1} name='답변4' id='rd1-4' className='radio4'></input>
          <label htmlFor='rd1-4' className='label4'><span className='num'>1.</span> 요즘 유행인 세련되고 스타일리쉬한 선물</label>

          <input type='radio' value={0} name='답변4' id='rd2-4' className='radio4'></input>
          <label htmlFor='rd2-4' className='label4'><span className='num'>2.</span> 친구가 가지고 있을 것 같지 않는 독특한 선물</label>

          <input type='radio' value={1} name='답변4' id='rd3-4' className='radio4'></input>
          <label htmlFor='rd3-4' className='label4'><span className='num'>3.</span> 일상생활에서 유용하게 사용할 수 있는 선물</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>5. 분위기 좋은 카페에 갔습니다. 무슨 음료를 시킬건가요?</p>
          <input type='radio' value={-1} name='답변5' id='rd1-5' className='radio5'></input>
          <label htmlFor='rd1-5' className='label5'><span className='num'>1.</span> 맛은 잘 모르겠지만 도전해보고 싶게 생긴 신비한 느낌의 카페 시그니쳐</label>

          <input type='radio' value={0} name='답변5' id='rd2-5' className='radio5'></input>
          <label htmlFor='rd2-5' className='label5'><span className='num'>2.</span> 카페 주인이 공들여 플레이팅한 이쁜 프라페</label>

          <input type='radio' value={1} name='답변5' id='rd3-5' className='radio5'></input>
          <label htmlFor='rd3-5' className='label5'><span className='num'>3.</span> 실패할 확률이 없는 깔끔한 근본 아메리카노</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>6. 친구들끼리 재밌는 기계를 하나 만들어보려고 할 때 가장 끌리는 분야는</p>
        <input type='radio' value={-1} name='답변6' id='rd1-6' className='radio6'></input>
<label htmlFor='rd1-6' className='label6'><span className='num'>1.</span> 기계의 외관을 만드는 분야 시그니쳐</label>

<input type='radio' value={0} name='답변6' id='rd2-6' className='radio6'></input>
<label htmlFor='rd2-6' className='label6'><span className='num'>2.</span> 기계를 어떤 모습으로 만들지 구상하는 분야</label>

<input type='radio' value={1} name='답변6' id='rd3-6' className='radio6'></input>
<label htmlFor='rd3-6' className='label6'><span className='num'>3.</span> 기계가 동작하는 것을 만드는 분야</label>
          </div>
        </div>


        <div className="slide">
        <div className='inner'>
        <p>7. 누군가를 위한 깜짝 파티를 준비할 때 가장 중요하다고 생각하는 것은?</p>
          <input type='radio' value={-1} name='답변7' id='rd1-7' className='rd7'></input>
          <label htmlFor='rd1-7' className='lb7'><span className='num'>1.</span> 서프라이즈에 선물을 빼먹을 순 없다! 선물이 가장 중요!</label>

          <input type='radio' value={0} name='답변7' id='rd2-7' className='rd7'></input>
          <label htmlFor='rd2-7' className='lb7'><span className='num'>2.</span> 맛있는 음식, 선물보단 파티 장소 꾸미기다!</label>

          <input type='radio' value={1} name='답변7' id='rd3-7' className='rd7'></input>
          <label htmlFor='rd3-7' className='lb7'><span className='num'>3.</span> 가장 중요한 건 어떤 방법으로 놀라게 해 주냐이다!</label>
         
          </div>
        </div>

        
        <div className="slide">
        <div className='inner'>
        <p>8. 책을 읽고자 서점에 갔다. 당신은 어떤 책을 고를 것인가?</p>
          <input type='radio' value={-1} name='답변8' id='rd1-8' className='rd8'></input>
          <label htmlFor='rd1-8' className='lb8'><span className='num'>1.</span> 흥미로운 내용과 다양한 주제가 담긴 책</label>

          <input type='radio' value={0} name='답변8' id='rd2-8' className='rd8'></input>
          <label htmlFor='rd2-8' className='lb8'><span className='num'>2.</span> 아름다운 표지 디자인과 편집이 잘 된 책</label>

          <input type='radio' value={1} name='답변8' id='rd3-8' className='rd8'></input>
          <label htmlFor='rd3-8' className='lb8'><span className='num'>3.</span> 인기있는 저자나 좋은 문체를 가진 책</label>
          <input type='submit' className='result_choice' value={"제출"}/>
          </div>
        </div>
      </Slider>
    </div>
    </form>
  );
}
export default Input;