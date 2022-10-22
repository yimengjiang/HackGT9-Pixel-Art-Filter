import './App.css';
import UploadField from './components/uploadField.js'
import OptionButton from './components/optionButton.js'
import { Component, createRef } from 'react'

class App extends Component {
    state = {
        uploadFieldRef: createRef(),
        resultImg: null
    }

    render() {
        return (
            <div className="page-content">
                <div className="screen-panel">
                    <div className="screen">
                        <div className="screen-wrapper">
                            <div id="buttons-column">
                                <OptionButton text="Fine" color="white"/>
                                <OptionButton text="Medium" color="white"/>
                                <OptionButton text="Coarse" color="white"/>
                            </div>

                            <UploadField ref={this.state.uploadFieldRef}/>
                            {/* <button onClick={async () => {
                                const resultImg = await this.state.uploadFieldRef.current.getResult(1)
                                this.setState({resultImg: resultImg})
                                console.log(resultImg)
                            }}>:)</button> */}
                        </div>
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
