import React from 'react';

export default class ChildB extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.changeParent}>Click Me</button>
        );
    }
}
