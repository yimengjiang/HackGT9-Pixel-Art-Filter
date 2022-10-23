import './optionButton.css';
import { Component } from 'react';

class OptionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            color: props.color,
            text: props.text
        }
    }

    render() {
        return (
            <div
                style={{
                    border: this.state.selected? `1px solid ${this.state.color}` : '0px',
                    boxShadow: this.state.selected? `${this.state.color} 0 0 7px` : null,
                    color: this.state.color
                }}
                className={`option-button ${this.state.selected? 'selected-option-button' : ''}`}
                onClick={() => this.props.onClick()}
            >
                {this.state.text}
            </div>
        )
    }
    // if option 1, have the bg color be red

    // if option 2, have the bg color be blue
    // if option 3, have the bg color be purple
}

export default OptionButton;
