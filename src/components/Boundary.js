import React from 'react'
export default class Boundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false 
    }
    /*static getDerivedStateFromError(error){ 
        return {hasError : true} 
    } */

    componentDidCatch(error, errorInfo){ 
        console.log(error); 
    } 
    render(){ 
        if(this.state.hasError){
            return <h1> An Error has occured and been catched !</h1> 
            return this.props.children 
        } 
        else{
            
        }
             
    }
}