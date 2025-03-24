import Counter from "./Counter";
import "./App.css";
import Batsman from "./Batsman";
import Bolar from "./Bolar";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("i am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleClickAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>

      <Bolar></Bolar>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me 2
      </button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button
        onClick={() => {
          alert("clicked 4");
        }}
      >
        Click Me 4
      </button>

      <button onClick={() => handleClickAdd5(5)}>Click add 5</button>
    </>
  );
}

export default App;
