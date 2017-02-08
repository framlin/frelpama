import React, { Component } from 'react';
import SectionEntries from './section_entries';

var id = 0;

class SectionList extends Component {
    renderSectionList() {

        if (!this.props.sections) {
            return (
                ""
            )
        }
        return this.props.sections.map(function(section){
            id++;
            return (
                <li key={id} className="section">
                    <h4>{section.section}</h4>
                    <SectionEntries entries={section.entries}/>
                </li>
            )

        });

    }

    render() {
        return (
            <ul className="list-unstyled section-list">
                {this.renderSectionList()}
            </ul>
        )
    }
}

export default SectionList;