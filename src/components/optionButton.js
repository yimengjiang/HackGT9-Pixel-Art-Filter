import './optionButton.css';
import { Component } from 'react';

class OptionButton extends Component {
    render() {
        return (
            <button
                style={{
                    borderColor: this.props.border,
                    boxShadow: `${this.props.border} 0 0 7px`,
                    color: this.props.border
                }}
                className="option-button"
            >
                {this.props.text}
            </button>
        )
    }
    // if option 1, have the bg color be red

    // if option 2, have the bg color be blue
    // if option 3, have the bg color be purple
}

export default OptionButton;
