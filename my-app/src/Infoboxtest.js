import React,{Component} from 'react';


class InfoBoxTest extends React.Component{

    /*
    constructor(props){
        super(props)

        this.state={
            InfoBoxLabel: 'Fajar',
            InfoBoxTime: '10:10',
            InfoBoxMessage: 'This is infobox Message',
            InfoBoxLocation: ''  
        }
    }
    */


    style1={
        //border: '2px solid black',
        textAlign: 'center',
        fontSize: '50px',
        fontWeight: 'bold',
        width: '100%',
        height: '100%',

    }

    style2={
        borderRadius: '10px',
        //border: '2px solid red',
        display: 'inline-block',
        //marginTop: this.props.left,
        marginLeft: this.props.LocationLeft,
        marginTop: this.props.LocationTop,
        //boxShadow: '10px 10px'
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'


    }

    style3={

    }  

    render(){
        return(
        <div>
            <div style={this.style2} className="col-xs-11 col-sm-8 col-md-5 col-lg-3 col-xl-2 ">
                <div>
                    <div  style={this.style1}>
                    <p>{this.props.Label}</p>
                    </div>
                </div>

                <div>
                    <div style={this.style1}>
                    <p>{this.props.Time}</p>
                    </div>
                </div>

                <div>
                    <div style={this.style3}>
                    <p>{this.props.Message}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default InfoBoxTest;