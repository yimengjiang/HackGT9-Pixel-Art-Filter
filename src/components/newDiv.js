import './newDiv.css';
import { Component } from 'react';

class NewDiv extends Component {
    render() {
        return (
            <div>
                <div class = "screen"></div>
                <div class = "button"></div>
                <div class = "setting"></div>
            </div>
            //<OptionButton color="red"/>
        )
    }
}

export default NewDiv;