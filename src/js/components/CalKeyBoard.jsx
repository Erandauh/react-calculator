import React, {Component} from 'react';

class CalKeyBoard extends Component {


    render() {
        return (
            <div>
                <button onClick={()=>this.props.onKey(this.props.calKeys[0])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[0]}</button>
               <button onClick={() => this.props.onKey(this.props.calKeys[1])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[1]}</button>
                <button onClick={() => this.props.onKey(this.props.calKeys[2])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[2]}</button>
                <button onClick={() => this.props.onSignKey('+')}
                        className="btn btn-danger btn-sm" >+</button>
                <br/>
                <button onClick={() => this.props.onKey(this.props.calKeys[3])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[3]}</button>
                <button onClick={() => this.props.onKey(this.props.calKeys[4])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[4]}</button>
                <button onClick={() => this.props.onKey(this.props.calKeys[5])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[5]}</button>
                <button onClick={() => this.props.onSignKey('-')}
                        className="btn btn-danger btn-sm" >-</button>
                <br/>
                <button onClick={() => this.props.onKey(this.props.calKeys[6])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[6]}</button>
                <button onClick={() => this.props.onKey(this.props.calKeys[7])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[7]}</button>
                <button onClick={() => this.props.onKey(this.props.calKeys[8])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[8]}</button>
                <button onClick={() => this.props.onSignKey('*')}
                        className="btn btn-danger btn-sm" >*</button>
                <br/>
                <button onClick={() => this.props.onKey(this.props.calKeys[9])}
                        className="btn btn-danger btn-sm" >{this.props.calKeys[9]}</button>
                <button onClick={() => this.props.onKey(".")}
                        className="btn btn-danger btn-sm" >.</button>
                <button onClick={() => this.props.onEqualsKey()}
                        className="btn btn-danger btn-sm" >=</button>
                <button onClick={() => this.props.onSignKey('/')}
                        className="btn btn-danger btn-sm" >/</button>
                <br/>
                <button onClick={() => this.props.onCKey()}
                        className="btn btn-dark btn-sm" style={{width:"102px"}}>C</button>

            </div>
        );
    }
}

export default CalKeyBoard;
