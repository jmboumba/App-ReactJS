 import React from "react";

class ListeItem extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div style={styles.item}>
                <div Align='center'>
                <h5>Identity Card </h5>
                </div>
                <div style={{float:'left'}}>
                    <img width={100} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiwIl_C8Ye0u8xvxsZA1KHNuyvg8ZvaB9Rg&usqp=CAU"/>
                    <h5 style={styles.gras}>N° {this.props.cin}</h5>
                </div>
                <div style={{float:'center'}}>
                    <p>Nom : {this.props.nom}</p>
                    <p>Prénom(s) : {this.props.prenom}</p>
                    <p>Né le : {this.props.dateN} </p>
                    <p>Nationalité : {this.props.nationalite} </p>
                </div>
            </div>
        )
    }
}

const styles = {
    item : {
    flex:1,
    width: 350,
    height:200,
    minWidth : 10,
    margin:25,
    padding:1,
    border: '1px solid black',
    borderRadius: '10px',
    backgroundColor:'green',
    backgroundImage: "url(https://tse3.mm.bing.net/th?id=OIP.Wivmet2DTNMScIkPzeAszwHaFj&pid=Api&P=0)"
    },
    gras:{
        fontWeight:'bold'
    }
}

export default ListeItem;