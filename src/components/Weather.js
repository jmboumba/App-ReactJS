import React from "react";

class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
          data: [],
          isLoading:false,
          error:null,
          lat:null,
          lon:null,
          temp:null
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        this.setState({isLoading:true})
        setTimeout(()=> fetch('https://api.openweathermap.org/data/2.5/weather?appid=c838157d2c1a47f83faa69240ccef6b6&units=metric&q=casablanca')
        .then(res => res.json())
        .then(data => 
            this.setState({data: data, isLoading:false}, console.log(this.state.data), console.log(this.state.data.main.get("temp"))))
            .catch(e => this.setState({error:e, isLoading:false}))
            , 1000);
    }
    

    

    render(){
        return(
            <div Align='center'>
                <div style={styles.item} >
                    <div style={styles.item2}><p style={{color:'red', float:'left'}}>Lon: -7.6192/ Lat: 33.5928 </p></div>
                    <p>.</p>
                    <div >
                        <h1>Météo de {this.state.data.name}</h1>
                        <p>Température : {} °C </p>
                        <img src="http://openweathermap.org/img/w/04d.png" style={styles.img}/>
                        <p>Description :  </p>
                    </div>
                </div>
            </div>
            
        )
    }

    

}

let styles = {
    item : {
    flex:1,
    width : 400,
    height: 400,
    margin:25,
    padding:10,
    border: '1px solid black',
    borderRadius: '10px',
    backgroundColor:'skyblue'
    },
    gras:{
        fontWeight:'bold'
    }, 
    img:{
        height:200,
        width: 200,
        float: 'center'
    },
    item2 : {
        flex:1,
        width : 200,
        height: 50,
        margin:25,
        padding:10,
        border: '1px solid black',
        borderRadius: '10px'
        }
}

export default Weather;