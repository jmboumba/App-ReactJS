import React from "react";

class Fetch extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
          posts: [],
          isLoading:false,
          error:null, 
          isAdmin:false
        }
    }

    componentDidMount(){
      
  }
    
  fetchData = async () =>{
    this.setState({isLoading:true})
    setTimeout(()=> fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => 
        this.setState({posts: data, isLoading:false}, console.log(this.state.posts)))
        .catch(e => this.setState({error:e, isLoading:false}))
        , 1000);
}


    render(){
        return(
        <div>
            <button onClick={this.fetchData}>Tester</button> 
            {this.state.isLoading ? <p style={{color:"blue"}}>Chargement en cours......</p> : null}

            <table>
          <thead>
            <tr>
              <th>id</th>
              <th>
                title
              </th>
              <th>
               body
              </th>
            </tr>
          </thead>
          {this.state.posts.map((val,key)=>{
            return(
          <tbody>

            <tr>
              <td >
                <div>
              
                  <div>
                    <p>
                    {val.userId}

                    </p>
                    <p>
                    {val.id}

                    </p>
                  </div>
                </div>
              </td>
              <td >
                <p>{val.title}</p>
              </td>
              <td>
                <p>{val.body}</p>
              </td>
      

            </tr>
         

          </tbody>
            )  })}
        </table>
        </div>
        
        )
    }
}

export default Fetch;