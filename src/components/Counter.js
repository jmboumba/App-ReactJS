import React from "react";

class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: this.props.start
      }
    }
  
    increment =() =>{
      this.setState({count:this.state.count+1})
    } 
    reset = () =>{
      this.setState({count:this.props.start})
    }
    desincrement = () =>{
      if(this.state.count>0){
        this.setState({count:this.state.count-1})
      }
    }
    render(){
      return(
        <div Align="center">
            <h4 style={{color:this.props.color}}>Counter: {this.state.count}</h4>
            <button value="Increment" onClick={this.increment}>Increment</button>
            <button value="Desincrement" onClick={this.desincrement}>Desincrement</button>
            <button value="Reset" onClick={this.reset}>Reset</button>
        </div>
      )   
    }
  }
  
  Counter.defaultProps = {
    start:0,
    color:"red"
  }
 
  /*
  Counter.propTypes = {
    start: PropTypes.number,
    color: PropTypes.string
  }*/

  export default Counter;