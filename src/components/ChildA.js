import React from 'react';

export default class ChildA extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.num}</p>
        );
    }
}
