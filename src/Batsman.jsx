import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [six, setSix]= useState(0)

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes=six + 1;
    setSix(updatedSixes)
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h3>Player: Bangla</h3>
      <p><small>Six Count: {six}</small></p>

      {
      runs >= 50 && <p>Your Score: 50</p>
      }

      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
