import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { increaseTwoCounter } from '../redux/actions/counterActions';

class IncreaseByTwo extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.dispatch(increaseTwoCounter())}}>
                    +2
                </button>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(increaseTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwo);