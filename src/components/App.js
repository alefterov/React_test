import React, {Component} from 'react';
import '../styles/App.css';
import Form from "./mainPage/formComponents/Form";




class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Form/>
            </div>
        )
    }
}

export default App;