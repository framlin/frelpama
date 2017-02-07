import React, { Component } from 'react';

var id = 0;

class Link extends Component {
    renderLink(entry) {
        let label = "";
        let href = "";

        label = entry.value;
        href = entry.target;
        return (
            <a className="link" href={href}> == {label} == </a>
        )
    }

    render () {
        return this.renderLink(this.props.link);
    }
}


export default Link;