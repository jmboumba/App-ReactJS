import React from "react";
import { Component, useState } from 'react' ;
import { ContextHookA } from "./ContextHookA";
import { ContextHookB } from "./ContextHookB";

export const LangageContext = React.createContext('fr')

export default function ContexGeneral() {
    const [lang, setLang] =useState('fr')
    
    return(
        <LangageContext.Provider value={lang}>
            <div Align='center'> 
            <div style={{float:'right'}}>
                <button onClick={()=> setLang('fr')}>fr</button>
                <button onClick={()=> setLang('en')}>en</button>
                <button onClick={()=> setLang('es')}>es</button>
            </div>
            <ContextHookA />
            <ContextHookB />
            </div>
        </LangageContext.Provider>
      
    );
    }
  