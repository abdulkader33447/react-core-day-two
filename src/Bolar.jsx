import { useState } from "react"

export default function Bolar(){

const [boll, setBoll]= useState(0);
const handleBoll =()=>{
  const updatedBall= boll +1;
  setBoll(updatedBall)
}

  return(
    <div style={{
      border:'3px solid purple',
      borderRadius:'12px'
    }}>
<h3>Bolar: Bangla</h3>


<h1>Boll: {boll}</h1>
{
  boll===6 && <p>end your over</p>
}
<button onClick={handleBoll}>Bolar</button>
    </div>
  )
}