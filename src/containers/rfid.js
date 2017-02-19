import React, { Component } from 'react';

class Rfid extends Component {
    renderRfid(rfid) {
        return (
            <div className="rfid">RfID: {rfid}</div>
        )
    }

    render () {
        return this.renderRfid(this.props.rfid);
    }
}


export default Rfid;