import { useState } from "react";

function InputControl() {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  setEmailValid(emailRegex.test(e.target.value));
  };

  
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value.toUpperCase());
          }}
        />
        <button
          onClick={() => {
            setInputValue(inputValue.toLocaleLowerCase());
          }}
        >
          소문자로
        </button>
      </div>
      {inputValue}
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="이메일을 입력하세요"
        />
      </div>
    </>
  );
}

export default InputControl;
