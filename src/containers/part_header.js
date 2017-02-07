import React, { Component } from 'react';
import Link from './link';

var id = 0, id2 = 0;


class PartHeader extends Component {

    renderText(desc) {
        let text = "";
        text = desc.value;
        if (text.length > 0) {
            return (
                <li key={id2}>{text}</li>
            )
        } else {
            return "";
        }

    }

    renderLink(desc) {
        return (
            <li key={id2}>
                <Link link={desc}/>
            </li>
        )
    }

    renderDescription() {
        var me = this;
        return this.props.part.description.map(function(descr) {
            id2++;
            if (descr.type === "text") {
                return me.renderText(descr);
            } else if (descr.type === "link") {
                return me.renderLink(descr);
            }
        });

    }


    renderPartHeader() {
        var name = this.props.part.name;

        return (
            <div key={id}>
                <h2 className="part-header">{name}</h2>
                <ul className="list-unstyled">
                    {this.renderDescription()}
                </ul>
            </div>
        )
    }

    render() {
        id++;
        return (
            <div key={id}>
                {this.renderPartHeader()}
            </div>
        );
    }
}

export default PartHeader ;
