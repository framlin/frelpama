import React, { Component } from 'react';
import Link from './link';

var id = 0;

class SectionEntries extends Component {

    renderSectionEntries() {
        var me = this;
        return this.props.entries.map(function(entry){
            id++;
            return (
                <li key={id} className="section-entry">
                    <Link link={entry}/>
                </li>
            )

        });

    }

    render() {
        return (
            <ul className="list-unstyled section-entries">
                {this.renderSectionEntries()}
            </ul>
        )
    }
}

export default SectionEntries;