import React from "react";
import ListeItem from "./Listeitem";
class Liste extends React.Component{
    constructor(props){
        super(props);
        this.state={id:"",nom:"", cin:"", prenom:"", dateN:"", nationalite:"", tab :[
            {id:1, nom:"ZAKA", prenom:"MOURID", dateN:'12.04.2001', cin:"KJ123884", nationalite:'MAROCAIN'},
            {id:2, nom:"ILIAS", prenom:"JOURID", cin:"HK123427", dateN:'12.04.1998', nationalite:'MAROCAIN'},
            {id:3, nom:"MICK", prenom:"BONO", cin:"BN836002", dateN:'12.04.1996', nationalite:'MAROCAIN'},
            {id:4, nom:"PAUL", prenom:"MATIS", cin:"ML352761", dateN:'12.04.1999', nationalite:'MAROCAIN'}
        ], check:false};

        
    }

    handleNom=(event)=> {
        let nom= event.target.value;
        let cap_name =nom.toLowerCase().split('')
            .map(w=> w.substring(0,1).toUpperCase()+ w.substring(1)).join('')
        this.setState({nom: cap_name})
        
    }

    handleCin= (event)=> {
        let cin= event.target.value;
        let letterCount=cin.replace(/[0-9]/g,'').length;
        if(letterCount>2)
            this.setState({check:true})
        else
            if(cin.length<9)
                this.setState({cin, check:false})
    }

    addStudent = () => {
        const tab = this.state.tab
        if(this.state.check){
            tab.push({id:this.state.id, nom:this.state.nom, cin:this.state.cin, prenom:this.state.prenom, dateN:this.state.dateN, nationalite:this.state.nationalite});
            this.setState({tab:this.tab, cin:'', nom:'', dateN:'', nationalite:'', prenom:'', id:''});
        }
    }

    render(){
        

        return(
            
            <div>
                <div Align="center">
                    <h3>Ajouter un utilisateur</h3>
                    <form>
                    <tr>
                        <td><p>Id : </p></td>
                        <td><input type={"text"} onChange={(e)=> this.setState({id: e.target.value})} value={this.state.id} /></td>
                    </tr>
                    <tr>
                        <td><p>Nom : </p></td>
                        <td><input type={"text"} onChange={(e)=> this.setState({nom: e.target.value})} value={this.state.nom} /></td>
                    </tr>
                    <tr>
                        <td><p>Prénom : </p></td>
                        <td><input type={"text"} onChange={(e)=> this.setState({prenom: e.target.value})} value={this.state.prenom} /></td>
                    </tr>
                    <tr>
                        <td><p>Cin : </p></td>
                        <td><input type={"text"} onChange={this.handleCin} value={this.state.cin} /></td>
                    </tr>
                    {this.state.check ? <label style={{color:'red'}}>CIN Invalid</label> : null}
                    
                    <tr>
                        <td><p>Date de naissance : </p></td>
                        <td><input type={"text"} onChange={(e)=> this.setState({dateN: e.target.value})} value={this.state.dateN} /></td>
                    </tr>
                    <tr>
                        <td><p>Nationalité : </p></td>
                        <td><input type={"text"} onChange={(e)=> this.setState({nationalite: e.target.value})} value={this.state.nationalite} /></td>
                    </tr>
                        
                    </form>
                    <button onClick={()=> this.addStudent} value="Enregistrer">Enregistrer</button>
                </div>
                
                <div>
                    <h3>Liste des utilisateurs</h3>
                    <ul>
                    {this.state.tab.map(elt => <ListeItem key={elt.id} nom={elt.nom} cin={elt.cin} prenom={elt.prenom} dateN={elt.dateN} nationalite={elt.nationalite}/>)}
                    </ul>
                </div>
                <br></br>
                
                
            </div>
        )
    }
}

export default Liste;