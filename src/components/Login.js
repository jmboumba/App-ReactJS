import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {username: "", password: "", isAdmin:false}
    }

    componentWillUnmount(){
        localStorage.removeItem('isAdmin')
    }

    
    validate = ()=> {
        if(this.state.username === "admin" && this.state.password === "admin"){
            this.setState({isAdmin:true})
            localStorage.setItem('isAdmin', true);
            console.log(localStorage.getItem('isAdmin'));
        } else{
            this.setState({isAdmin:false})
            localStorage.setItem('isAdmin', false);
            console.log(localStorage.getItem('isAdmin'));
        }
    }
    disconnect = () =>{
        this.setState({isAdmin:false, username: "", password: ""})
    }

    render(){
            return <div Align='center'>
                <div>
                    <tr><h4>Connectez vous à vos News !!</h4></tr>
                    </div>
                <tr>
                    <td><p>Username : </p></td>
                    <td><input type={"text"} onChange={(e)=> this.setState({username: e.target.value})} value={this.state.username} /></td>
                </tr>
                <tr>
                    <td><p>password : </p></td>
                    <td><input type={"text"} onChange={(e)=> this.setState({password: e.target.value})} value={this.state.password} /></td>
                </tr>
                <tr><button onClick={() => this.validate}>Connexion</button></tr> 
            </div>
        }
}

export default Login;