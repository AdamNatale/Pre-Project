import React from 'react';
import './message-component.css';
import iconRock from './icons8-rock-48.png';
import iconPaper from './icons8-sheet-of-paper-48.png';
import iconScissors from './icons8-cutting-48.png';

export default class MessageComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.weapon = props.data;
        this.card = {
            'width': '200px',
            'height': '100px',
            'margin': '0px 20px',
            'display': 'inline-block',
            'borderRadius': '12px',
            'cursor': 'pointer',
            'boxShadow': '5px 5px 10px 0px #262626'
        };
        this.text = {
            'fontWeight': '600',
            'paddingTop': '12px',
            'fontSize': '20px',
            'textAlign': 'center'
        };

        switch(this.weapon) {
            case 'Rock':
                this.icon = iconRock;
                this.card['border'] = '6px #e6e6e6 solid';
                this.card['backgroundColor'] = '#d9d9d9';
                this.text['color'] = '#617C89';
                break;
            case 'Paper':
                this.icon = iconPaper;
                this.card['backgroundColor'] = '#fdc79b';
                this.card['border'] = '6px #fee3cd solid';
                this.text['color'] = '#46A6F1';
                break;
            default:
                this.icon = iconScissors;
                this.card['backgroundColor'] = '#ffff4d';
                this.card['border'] = '6px #ffffb3 solid';
                this.text['color'] = '#A84CB7';
                break;
        }
    }

    test() {
        this.props.onSelectOption(this.weapon);
    }
    
    render() {

        return (
            <div style={this.card} onClick={this.test.bind(this)}>
                <div style={this.text}>
                    {this.props.data}
                </div>
                <img src={this.icon} alt="logo" />
                
            </div>
        )
    }
}