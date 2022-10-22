import './App.css';
import UploadField from './components/uploadField.js'
import { Component, createRef } from 'react'

class App extends Component {
    state = {
        uploadFieldRef: createRef(),
        resultImg: null
    }

    render() {
        return (
            <div className="App">
                <UploadField ref={this.state.uploadFieldRef}/>
                <button onClick={async () => {
                    const resultImg = await this.state.uploadFieldRef.current.getResult(1)
                    this.setState({resultImg: resultImg})
                    console.log(resultImg)
                }}>:)</button>
                {this.state.resultImg}
            </div>
        );
    }
}

export default App;
