import React from "react";
import Login from "./Login";
import NewsFeed from "./NewsFeed";

export default class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAdmin: localStorage.getItem('isAdmin') === 'true'
        }
    }

    changeAdmin = (a) => {
        this.setState({ isAdmin: a})
        localStorage.setItem('isAdmin', true)
    }

    logout = ()=> {
        localStorage.removeItem('isAdmin')
        this.setState({isAdmin: false})
    }

    render(){
       return <div>
        {this.state.isAdmin ? <div>
            <button onClick={this.logout }> Logout </button>
        </div> : null}
        {this.state.isAdmin ? <NewsFeed/> : <Login fn={this.changeAdmin} />}
        </div> 
    }
}
