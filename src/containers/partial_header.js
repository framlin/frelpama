import React, { Component } from 'react';

var id = 0;


class PartialHeader extends Component {
    render() {
        let partial = this.props.partial;
        return (
            <div className="partial">
                <h3>{partial.type}</h3>
                <b>{partial.name}</b>
            </div>
        )
    }
}
export default PartialHeader ;