import React from "react";

class BackgroundColor extends React.Component{
    constructor(props){
        super(props);
        this.state = {isDark:false}
    }

    render(){
        const style = this.state.isDark ? styles.dark : styles.light
        return(
            <div style={style.container}>
                    <p style={style.tcolor}>Data can be accessed from anywhere</p>
                    <p>This is a test for Redux/context</p>
                    <button style={style.btn} onClick={()=>this.setState({isDark: !this.state.isDark})}>Change Theme</button>
            </div>
        )
    }
}

const styles = {
    dark:{
        container:{backgroundColor:'black', color:'white', textAlign:'center'}, 
        tcolor:{color:'red'},
        btn: {backgroundColor:'red', color:'white'}
    }, 
    light:{
        container:{backgroundColor:'white', color:'black', textAlign:'center'},
        btn: {backgroundColor:'blue', color:'white'}
    }
}

export default BackgroundColor;