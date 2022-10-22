import './newDiv.css';
import { Component } from 'react';

class NewDiv extends Component {
    render() {
        return (
            <div>
                <div class = "screen">1</div>
                <div class = "button">2</div>
                <div class = "setting">3</div>
            </div>
            //<OptionButton color="red"/>
        )
    }
}

export default NewDiv;