import './optionButton.css';
import { Component } from 'react';

class OptionButton extends Component {
    render() {
        return (
            <button onClick={() => {alert(this.props.thisButtonClicks)}}>{ this.props.option1}</button>
        )
    }
}

export default OptionButton;
