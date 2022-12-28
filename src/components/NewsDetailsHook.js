import React from 'react'
export default function NewsDetails({data, handleBack}){
    let img_url = "https://tse3.mm.bing.net/th?id=OIP.e58I71dQU3DvfMnhktKzLgHaEL&pid=Api&P=0'"
    return (
        <div style={{margin:20}}>
            <h1>Details View</h1>
            <h2 color='blue'>{data.title}</h2>
            <img src={img_url} alt="logo" />
            <tr><span> Created at : {data.created_at}</span></tr>
            <tr><p>Author : {data.author} </p></tr>
            <button onClick={() => handleBack()}>Go Back</button>
        </div>
    )
}