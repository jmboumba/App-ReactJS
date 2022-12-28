import React, { useState } from "react";

function CounterHook(){
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())

    return <div style={{textAlign:'center'}}>
        <p>You incremented to : {count}</p>
        <button style={{color:'red'}} onClick={()=>setCount(count +1)}>Increment</button>
        
    </div>
}

export default CounterHook;