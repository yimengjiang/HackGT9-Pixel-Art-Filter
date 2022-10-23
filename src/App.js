import './App.css';
import UploadField from './components/uploadField.js'
import OptionButton from './components/optionButton.js'
import { Component, createRef } from 'react'

class App extends Component {
    state = {
        uploadFieldRef: createRef(),
        optionButtonRefs: [
            createRef(),
            createRef(),
            createRef()
        ],
        optionButtonSelected: -1,
        resultImg: null,
        isSharing: false
    }

    selectButton(buttonNo) {
        let btnArr = [0, 0, 0]
        btnArr[buttonNo] = 1
        this.setState({optionButtonSelected: buttonNo})
        for (let i=0; i<3; i++) {
            this.state.optionButtonRefs[i].current.setState({selected: i===buttonNo ? 1 : 0})
        }
    }

    getResultImg() {
        console.log('Wait for it!')
        if (this.state.optionButtonSelected === -1) {
            alert('Please select a filtering option before proceeding!')
            return
        } if (!this.state.uploadFieldRef.current.state.selectedFile) {
            alert('You must choose an image file to apply the filter!')
            return
        } else {
            const uploadField = this.state.uploadFieldRef.current
            uploadField.getResult(this.state.optionButtonSelected, (imgEle) => {
                this.setState({resultImg: imgEle})
            })
        }
    }

    render() {
        var screenDisplay = null

        if (this.state.resultImg) {
            screenDisplay = <div className="display-screen-wrapper">
            {this.state.resultImg}
            <div id="buttons-row">
                <OptionButton text="Generate New" color="#1AC7E5" onClick={() => this.setState({resultImg: null, optionButtonSelected: -1, isSharing: false})}/>
                <OptionButton text="Save" color="#E51AC7"/>
            </div>
        </div>
        } else {
            screenDisplay = <div className="prompt-screen-wrapper">
            <div id="buttons-column">
                <OptionButton text="Fine" color="#E51AC7" ref={this.state.optionButtonRefs[0]} onClick={() => this.selectButton(0)}/>
                <OptionButton text="Medium" color="#E51AC7" ref={this.state.optionButtonRefs[1]} onClick={() => this.selectButton(1)}/>
                <OptionButton text="Coarse" color="#E51AC7" ref={this.state.optionButtonRefs[2]} onClick={() => this.selectButton(2)}/>
                <OptionButton text="Generate" color="#1AC7E5" style={{flex: false}} onClick={async () => await this.getResultImg()}/>
            </div>

            <UploadField ref={this.state.uploadFieldRef}/>
        </div>
        }

        return (
            <div className="page-content">
                <div className="screen-panel">
                    <div className="screen">
                        {screenDisplay}
                    </div>
                </div>
                <div className="button-panel">

                </div>
                <div className="settings-panel">

                </div>
            </div>
        );
    }
}

export default App;
