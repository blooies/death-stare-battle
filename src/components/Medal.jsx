import React, { Component } from 'react';

class Medal extends Component {
    render() {
        return (
            <div className={this.props.type}></div>
        )
    }
}

export default Medal;