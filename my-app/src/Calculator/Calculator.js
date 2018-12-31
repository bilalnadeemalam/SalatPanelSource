import React, {Component} from 'react';

import CalcTitle from './Calctitle';
import CalculatorFront from './Calculatorfront';

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            expression: undefined
        }
    }

    render() {
        return (
            <div>
                <CalcTitle />
                <CalculatorFront result={this.state.expression} />
            </div>
        );
    }
}
export default Calculator;