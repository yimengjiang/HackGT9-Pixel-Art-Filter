import '../App.css';
import { Component } from 'react';

class UploadField extends Component {
    render() {
        return (
            <p onClick={() => {alert(this.props.hello)}}>{ this.props.hello }</p>
        )
    }
}

export default UploadField;
