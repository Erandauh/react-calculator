import React, {Component} from 'react';
import CalKeyBoard from './CalKeyBoard'
import DisplayPanel from './DisplayPanel'

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { updateDisplayValue } from '../../actions/calculatorActions';

class Calculator extends Component {

    /*componentWillMount() {
        console.log("Hoo");
        this.props.updateDisplayValue();
    }*/

    constructor(props) {
        super(props);
        this.state = {
            calKeys: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 0
            ],
            displayValue: 0,
            prevVal: 0,
            signVal: ''
        };

    }

    handleKey = (val) => {
        let displayVal = "" + this.state.displayValue;
        displayVal += val;
        this.setState({ displayValue:displayVal});
    };

    handleCKey =() => {
        this.setState({displayValue:0})
    };

    handleSignKey =(sign) =>{
        this.setState({prevVal: this.state.displayValue, displayValue:0, signVal:sign});
    };

    handleEqualsKey= () =>{

        let result = 0;
        switch (this.state.signVal){
            case '+':
                result = parseFloat(this.state.prevVal)+ parseFloat(this.state.displayValue);
                break;
            case '-':
                result = parseFloat(this.state.prevVal)- parseFloat(this.state.displayValue);
                break;
            case '*':
                result = parseFloat(this.state.prevVal)* parseFloat(this.state.displayValue);
                break;
            case '/':
                result = parseFloat(this.state.prevVal)/parseFloat(this.state.displayValue);
                break;
            default:
                break;
        };

        this.props.updateDisplayValue() && this.props.updateDisplayValue();
        //this.setState({displayValue: result})
    }

    render() {
        return (
            <div>
            <DisplayPanel val={this.state.displayValue}/>
            <CalKeyBoard calKeys={this.state.calKeys}
                         onKey={this.handleKey}
                         onCKey={this.handleCKey}
                         onSignKey={this.handleSignKey}
                         onEqualsKey={this.handleEqualsKey}
            />
            </div>
        );
    }
}

Calculator.propTypes = {
    updateDisplayValue: PropTypes.func.isRequired
};


export default connect(null, { updateDisplayValue })(Calculator);
