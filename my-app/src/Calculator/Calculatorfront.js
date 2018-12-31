import React, {Component} from 'react';

class CalculatorFront extends React.Component{


    imputStyle={
        width:'340px',
        height: '80px',
        fontSize: '40px',
        backgroundColor: 'Grey',
        color: 'white',
        paddingTop: '40px',
        fontFamily: 'amiri',
        fontWeight: 'bold'
    }
    back={
        paddingTop: '40px',
        paddingLeft: '30px', 
    }
    buttonContainer={
    }
    bCustom={
        width: '80px',
        height: '70px',
        border: 'none',
        backgroundColor: '#34495E',        
        fontWeight: 'bold',
        color: 'white',
        fontSize: '25px'
    }

    bCustomOp={
        width: '100px',
        height: '70px',
        border: 'none',
        backgroundColor: '#34495E',        
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'LightGreen'
    }
    bCustom0={
        width: '240px',
        height: '70px',
        border: 'none',
        backgroundColor: '#34495E',        
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'white'
    }
    bCustomEq={
        width: '340px',
        height: '70px',
        border: 'none',
        backgroundColor: '#34495E',        
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'LightGreen',
    }
    bCustomClear={
        width: '340px',
        height: '70px',
        border: 'none',
        backgroundColor: '#34495E',        
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'lightRed',
    }
    
    render() {
        return (
             <div className="container" >
             
                <div style={this.back} className="col-md-5">
                    <div>
                        <input type='text' placeholder='000...' className="form-control" 
                            style={this.imputStyle} disabled={true} value={this.props.expression}></input>
                    </div>
                    <div style={this.buttonContainer}>
                        <div>
                            <button style={this.bCustom}>1</button>
                            <button style={this.bCustom}>2</button>
                            <button style={this.bCustom}>3</button>
                            <button style={this.bCustomOp}>+</button>
                        </div>
                        <div>
                            <button style={this.bCustom}>4</button>
                            <button style={this.bCustom}>5</button>
                            <button style={this.bCustom}>6</button>
                            <button style={this.bCustomOp}>-</button>
                        </div>
                        <div>
                            <button style={this.bCustom}>7</button>
                            <button style={this.bCustom}>8</button>
                            <button style={this.bCustom}>9</button>
                            <button style={this.bCustomOp}>*</button>
                        </div>
                        <div>
                            <button style={this.bCustom0}>0</button>                            
                            <button style={this.bCustomOp}>/</button>
                        </div>
                        <div>
                            <button style={this.bCustomEq}>=</button>                            
                        </div>
                        <div>
                            <button style={this.bCustomClear}>Clear</button>                            
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
export default CalculatorFront;