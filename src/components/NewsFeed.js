import React from "react";
import NewsItem from "./NewsItem";
import Login from "./Login";

class NewsFeed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            isLoading:true,
            error:null, 
            isAdmin:false
        }
    }

    componentDidMount(){
        localStorage.setItem('isAdmin', false)
        this.fetchData()
        
    }

    fetchData = async () =>{
        setTimeout(()=> fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => 
            this.setState({posts: data, isLoading:false}, console.log(localStorage.getItem('isAdmin'))))
            .catch(e => this.setState({error:e, isLoading:false}))
            , 1000);
    }

    render(){
        let posts = this.state.posts.map(post => <NewsItem key={post.id} data={post} />)
        if(localStorage.getItem('isAdmin')==true){
            return(
                <div>
                   <div style={styles.feed}>
                        <div >
                        {this.state.isLoading ? <p style={{color:"blue"}}>Chargement en cours ...</p> :this.state.error 
                        ? <p>Une erreur est survenue </p> : posts 
                        }
                        </div>  
                   </div>  
                </div>
            )
        }else{
            return <div>
                <Login />
            </div>
        }
            
    }
}

let styles = {
    feed : {
        display:'flex',
        flexWrap : 'wrap',
        justifyContent:'center',
        alignItems:'center'
    }
    }
  
export default NewsFeed;