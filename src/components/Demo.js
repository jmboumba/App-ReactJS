import React from "react";

class Demo extends React.Component{
    constructor(props){
        super(props);

        this.state={
            date: new Date(),
            color: "blue",
            hide: false
        }
    }

    componentDidMount(){
        setInterval(() => { 
            this.setState(
                {date : new Date()}) 
        }, 1000) 
    }

    changeColor = ()=>{
        this.setState({color:"green"})
    }

    render(){
        return(
            <div>
                {this.state.hide ? <p style={{color:this.state.color}}>{this.state.date.toISOString()}</p>: null}
                <button value="Horloge" onClick={()=> alert(this.state.date.toString())}>Horloge</button>
                <button value="Color1" onMouseOver={()=> this.setState({color:"red"})}>Changer couleur 1</button>
                <button value="Color2" onMouseOver={this.changeColor}>Changer couleur 2</button>
                <button value="cacher" onClick={()=> this.setState({hide: !this.state.hide})}>Toggle</button>
            </div>
        ) 
    }
}

export default Demo;