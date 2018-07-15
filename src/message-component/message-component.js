import React from 'react';
import './message-component.css';
import iconRock from './icons8-rock-48.png';
import iconPaper from './icons8-sheet-of-paper-48.png';
import iconScissors from './icons8-cutting-48.png';

export default class MessageComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.weapon = props.data;
        
        switch(this.weapon) {
            case 'Rock':
                this.icon = iconRock;
                break;
            case 'Paper':
                this.icon = iconPaper;
                break;
            default:
                this.icon = iconScissors;
                break;
        }
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
                <img src={this.icon} alt="logo" />
                
            </div>
        )
    }
}