import React from "react";

class NewsItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {likes:0, isLiked:false, dislikes:0, isCommenting:false}
    }

    like = () =>{
        if(this.state.likes===0){
            this.setState({likes:1, dislikes:0})
        }else{
            this.setState({likes:0})
        }
    }

    dislike = () =>{
        if(this.state.dislikes===0){
            this.setState({dislikes:1, likes:0})
        }else{
            this.setState({dislikes:0})
        }
    }

    isCommenting = () =>{
        if(this.state.isCommenting===false){
            this.setState({isCommenting:true})
            console.log(this.state.isCommenting)
        }   
        else{
            this.setState({isCommenting:false});  
            console.log(this.state.isCommenting)
        }
                   
    }


    render(){
        return(
            <div style={styles.item} >
                <h3 style={styles.gras}>User ID: {this.props.data.userId}</h3>
                <p style={{width:400}}>{this.props.data.title}</p>
                <img src='https://tse3.mm.bing.net/th?id=OIP.e58I71dQU3DvfMnhktKzLgHaEL&pid=Api&P=0' width={400} height={300}/>
                <p >____________________________________________________________</p>
                <p style={{width:400}}>{this.props.data.body} </p>
                <p >____________________________________________________________</p>
                <tr>
                    <td ><button onClick={this.like}>👍 {this.state.likes}</button></td>
                    <td style={styles.td}><button onClick={this.dislike}>👎 {this.state.dislikes}</button></td>
                    <td>
                        <button style={{ background:'skyblue'}} onClick={this.isCommenting}>💬 comment</button>
                    </td>
                </tr> 
                 <tr>{this.state.isCommenting ?
                    <td>
                        <input ></input>
                        <button>Envoyer</button>
                    </td>: null} 
                </tr>
                
            </div>
        )
    }
}

let styles = {
    item : {
    flex:1,
    minWidth : 200,
    margin:25,
    padding:10,
    border: '1px solid black',
    borderRadius: '10px'
    },
    gras:{
        fontWeight:'bold'
    }, 
    td:{
        padding:10 
    }
}

export default NewsItem;