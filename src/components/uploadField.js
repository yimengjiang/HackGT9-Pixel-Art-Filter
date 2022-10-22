import './uploadField.css';
import { Component, createRef } from 'react';

const allowedFileExts = ['png', 'jpg', 'jpeg']

class UploadField extends Component {
    state = {
        selectedFile: null,
        fileUploadRef: createRef(),
        uploadSVGRef: createRef()
    }

    handleClick() {
        this.state.fileUploadRef.current.click()
    }

    onFileChange(event) {
        const fileObj = event.target.files[0]
        const fileExt = fileObj.name.split('.').pop()
        if (!allowedFileExts.includes(fileExt.toLowerCase())) {
            alert('Invalid file extension! Please choose a different file.')
        } else {
            this.setState({selectedFile: event.target.files[0].name})
        }
    }

    render() {
        return (
            <div id="upload-field" onClick={this.handleClick.bind(this)}>
                <object
                    id="upload-icon" data="/upload.svg" aria-label="Upload File"
                    onClick={this.handleClick.bind(this)}
                />

                <p id="upload-text">Choose File</p>

                <input
                    type="file" ref={this.state.fileUploadRef}
                    onChange={this.onFileChange.bind(this)} style={{display:'none'}}
                />
            </div>
        )
    }
}

export default UploadField;
