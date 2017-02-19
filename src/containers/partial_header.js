import React, { Component } from 'react';

class PartialHeader extends Component {
    render() {
        let partial = this.props.partial;
        return (
            <div className="partial">
                <h3 className="partial-header">{partial.partial}</h3>
                <div className="partial-header-name">{partial.name}</div>
            </div>
        )
    }
}
export default PartialHeader ;