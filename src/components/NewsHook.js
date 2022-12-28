import React from 'react'
export default function News({data, handleClick}){
    let img_url = "https://tse3.mm.bing.net/th?id=OIP.e58I71dQU3DvfMnhktKzLgHaEL&pid=Api&P=0"
    let styles = {
    container : { flex:1, margin:5},
    btn : { color: 'white', backgroundColor: 'teal' },
    title : { marginBottom : 0, color: 'red' }
}
return (
    <div style={styles.container}>
        <tr><p style={styles.title}>{data.title}</p></tr>
        <img src={img_url} alt="Placeholder" width={400} height={300}/>
        <tr><button style={styles.btn} onClick={() => handleClick(data.title)}>
        Voir Détails
        </button></tr>
    </div>
)
}