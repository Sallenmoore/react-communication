import React from 'react';
import ChildA from './ChildA.js'
import ChildB from './ChildB.js'
import ChildC from './ChildC.js'

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parenttochild: 0,
            childtoparent: 0,
            childtochild: 0,
        };
        this.changePtoC = this.changePtoC.bind(this);
        this.changeCtoP = this.changeCtoP.bind(this);
        this.changeCtoC = this.changeCtoC.bind(this);
    }

    changePtoC(change){
        this.setState((prev) =>({
            parenttochild: prev.parenttochild+1
        }));
    }

    changeCtoP(){
        this.setState((prev) =>({
            childtoparent: prev.childtoparent+1
        }));
    }
    changeCtoC(){
        this.setState((prev) =>({
            childtochild: prev.childtochild+1
        }));
    }

    render() {
        return (
            <div>
                <h1> Parent to Child </h1>
                <ChildA
                    num={this.state.parenttochild}
                />
                <button onClick={this.changePtoC}>Parent to Child</button>

                <hr/>
                <h1> Child to Parent </h1>
                <ChildB
                    changeParent={this.changeCtoP}
                />
                <p>{this.state.childtoparent}</p>

                <hr/>
                <h1> Child to Child </h1>
                <ChildC
                    changeSibling={this.changeCtoC}
                />
                <ChildA
                    num={this.state.childtochild}
                />
            </div>
        );
    }
}
