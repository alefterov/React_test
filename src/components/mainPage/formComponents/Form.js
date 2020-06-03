import React, {Component} from 'react';
import StageIndicator from "./StageIndicator";
import FormInputs from "./FormInputs";
import "./Form.css";

class Form extends Component {
    render() {
        return (
            <div className="wrapper">

                <StageIndicator />
                <FormInputs />

            </div>
        );
    }

}

export default Form;