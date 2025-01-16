import { useState, useRef } from "react";

// 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
const Register = () => {
  // 통합 상태값
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // 통합 핸들러
  const onChange = (e) => {
    countRef.current ++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if(input.name === '') {
      // 이름을 입력하는 DOM 요소에 포커스
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="">국적선택</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;
