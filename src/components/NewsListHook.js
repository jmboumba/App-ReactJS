import React, { useState, useEffect } from 'react';
import News from './NewsHook'
import NewsDetails from './NewsDetailsHook'

export default function NewsFeed(props){
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [selectedNews, setSelectedNews]= useState(null)
    const [showDetails, setShowDetails] = useState(false)
    const api_url = "https://hn.algolia.com/api/v1/search?query=reactjs"

    useEffect( ()=>{
        function fetchdata(){
            fetch(api_url)
            .then(res => res.json())
            .then(data => setData(data.hits))
            .catch(err => setError(true))
            .finally(()=> setLoading(false))
        }
        fetchdata();
    }, [])

    //fonction use to show details
    function handleClick(id) { setShowDetails(true) ;
        setSelectedNews(data.filter(n => n.title === id)[0])
    }

    //fonction use to hide details
    function handleBack() { setShowDetails(false) ; setSelectedNews(null) ;}

    //definition of whole posts
    let main = loading ? <h1>Loading ....</h1> : error ? <h1>Error</h1> :
        data.map((news, index) => <News handleClick={handleClick} key={index}
            data={news} />)

    return (
    <>
        <div>
            <h3>My News Hook</h3>
        </div>
        <div style={{display : 'flex', flexWrap:'wrap'}}>
            {showDetails ? <NewsDetails handleBack={handleBack} data={selectedNews} /> : main }
        </div> 
    </>
    );
}