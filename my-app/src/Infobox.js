import React,{Component} from 'react';


class InfoBox extends React.Component{

    constructor(props){
        super(props)

        this.state={
            InfoBoxLabel: 'Fajar',
            InfoBoxTime: '10:10',
            InfoBoxMessage: 'This is infobox Message',  
        }
    }


    style1={
        //border: '2px solid black',
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
    }

    style2={
        borderRadius: '25px',
        border: '2px solid red',
        display: 'inline-block',
    }
    

    render(){
        return(
            <div style={this.style2}>
                <div className='row'>
                    <div className='col-md-2' style={this.style1}>
                    <p>{this.state.InfoBoxLabel}</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2' style={this.style1}>
                    <p>{this.state.InfoBoxTime}</p>
                    </div>
                </div>

                
                <div className='row'>
                    <div className='col-md-2' style={this.style1}>
                    <p>{this.state.InfoBoxMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoBox;