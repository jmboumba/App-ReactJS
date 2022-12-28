import React, { useContext } from "react";
import { LangageContext } from "../components/ContextGeneral";
import { messages } from "./messages";

export function ContextHookA(){
    const lang = useContext(LangageContext)
    const message = messages[lang]
    return <div style={styles.style}>
        <h1>Context Hook B</h1>
        <p>{message.HELLO} !</p>
        <p>{message.GO}</p>
    </div>
}

const styles={
    style:{textAlign:'center', backgroundColor:'red', border: '1px solid black',width: 350,
    height:200}
}