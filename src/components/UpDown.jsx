import { useState } from "react";

function UpDown() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState("");
  const [correct] = useState(Math.floor(Math.random() * 100) + 1);

  const handleClick = () => {
    console.log("함수구현");
    console.log(num, correct);
    parseInt(num) > correct && setResult("Down하세요");
    parseInt(num) < correct && setResult("Up하세요");
    parseInt(num) === correct && setResult("정답입니다");
  };

  return (
    <div className="game-container">
      <h1>업다운 숫자 맞추기 게임</h1>
      <p>1부터 100 사이의 숫자를 맞춰보세요.</p>
      <div className="input-group">
        <input
          type="number"
          id="userInput"
          placeholder="숫자 입력"
          min="1"
          max="100"
          // value={num}
          onChange={(e) => {
            setNum(Number(e.target.value));
          }}
        />
        <button onClick={handleClick}>제출</button>
      </div>
      <p id="result">{result}</p>
    </div>
  );
}

export default UpDown;
