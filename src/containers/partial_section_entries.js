import React, { Component } from 'react';
import Link from './link';

var id = 0;

class PartialSectionEntries extends Component {

    renderSectionEntries() {
        var me = this;
        return this.props.entries.map(function(entry){
            id++;
            return (
                <li key={id}>
                    <Link link={entry}/>
                </li>
            )

        });

    }

    render() {
        return (
            <ul className="list-unstyled">
                {this.renderSectionEntries()}
            </ul>
        )
    }
}

export default PartialSectionEntries;