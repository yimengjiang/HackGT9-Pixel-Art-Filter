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
        const promptForFile = <>
            <div id="buttons-column">
                <OptionButton text="Fine" border="#E51AC7"/>
                <OptionButton text="Medium" border="#E51AC7"/>
                <OptionButton text="Coarse" border="#E51AC7"/>
                <OptionButton text="Generate" border="#1AC7E5" style={{flex: false}}/>
            </div>

            <UploadField ref={this.state.uploadFieldRef}/>
        </>

        const displayFilteredImg = <>

        </>

        return (
            <div className="page-content">
                <div className="screen-panel">
                    <div className="screen">
                        <div className="screen-wrapper">
                            {
                                this.resultImg ? displayFilteredImg : promptForFile
                            }
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
