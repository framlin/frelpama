import React, { Component } from 'react';
import PartialSectionEntries from './partial_section_entries';

var id = 0;

class PartSectionList extends Component {
    renderSectionList() {
        if (!this.props.part.sections) {
            return (
                ""
            )
        }
        return this.props.part.sections.map(function(section){
            id++;
            return (
                <li key={id}>
                    <h4>{section.section}</h4>
                    <PartialSectionEntries entries={section.entries}/>
                </li>
            )

        });

    }

    render() {
        return (
            <ul className="list-unstyled partial-section-list">
                {this.renderSectionList()}
            </ul>
        )
    }
}

export default PartSectionList;