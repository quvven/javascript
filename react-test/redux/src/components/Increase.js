import React, { Component } from 'react'
import { increaseCounter } from '../redux/actions/counterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Increase extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.dispatch(increaseCounter())}}>
                    +1
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(Increase);