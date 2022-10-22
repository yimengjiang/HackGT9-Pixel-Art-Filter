import './optionButton.css';
import { Component } from 'react';

class OptionButton extends Component {
    render() {
        return (
            <button onClick={() => {alert(this.props.thisButtonClicks)}}>{ this.props.option1}</button>
        )
    }
    // if option 1, have the bg color be red
    
    // if option 2, have the bg color be blue
    // if option 3, have the bg color be purple
}

export default OptionButton;
