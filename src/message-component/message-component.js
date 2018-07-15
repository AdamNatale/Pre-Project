import React from 'react';
import './message-component.css';

export default class MessageComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.weapon = props.data;
    }

    test() {
        this.props.onSelectOption(this.weapon);
    }
    
    render() {

        return (
            <div id="msg" onClick={this.test.bind(this)}>
                <div id="obj">
                    {this.props.data}
                </div>
                
            </div>
        )
    }
}