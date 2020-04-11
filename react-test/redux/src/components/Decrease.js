import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { decreaseCounter } from '../redux/actions/counterActions';

class Decrease extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.dispatch(decreaseCounter())}}>
                    -1
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(Decrease);