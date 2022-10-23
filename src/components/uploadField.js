import './uploadField.css';
import ResultDisplay from './resultDisplay.js'
import { Component, createRef } from 'react';

const allowedFileExts = ['png', 'jpg', 'jpeg']

class UploadField extends Component {
    state = {
        selectedFile: null,
        fileUploadRef: createRef()
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
            let reader = new FileReader()
            reader.readAsDataURL(fileObj)
            reader.onload = () => {
                this.setState({selectedFile: {
                    name: fileObj.name,
                    ext: fileExt,
                    data: reader.result,
                    originalFile: fileObj
                }})
            }
            reader.onerror = (err) => {
                alert('Unexpected error occurred when loading image: '+err+'. Please try again.');
            }
        }
    }

    getChosenFile() {
        return this.state.selectedFile;
    }

    getResult(filterMode, callBack) {
        ResultDisplay(this.state.selectedFile, filterMode, callBack)
    }

    render() {
        const uploadPromptField = 
                    <>
                        <img src="./upload.svg" alt="Upload File" id="upload-icon"/>
                        <br/>
                        <span id="upload-text">Choose File</span>
                    </>
        
        const displayFileField = 
                    <>
                        <img
                            src={this.state.selectedFile? this.state.selectedFile.data : this.state.selectedFile}
                            alt="Selected file" id="chosen-file-display"
                        />
                        <br/>
                        <span id="remove-text">Choose New File</span>
                    </>

        return (
            <div 
                id={this.state.selectedFile? 'display-chosen-field' : 'upload-field'}
                onClick={this.handleClick.bind(this)}
            >
                {this.state.selectedFile ? displayFileField : uploadPromptField}
                <input
                    type="file" ref={this.state.fileUploadRef}
                    onChange={this.onFileChange.bind(this)} style={{display:'none'}}
                />
            </div>
        )
    }
}

export default UploadField;
