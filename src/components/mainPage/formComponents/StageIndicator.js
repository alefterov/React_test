import React, {Component} from 'react';
import "./Form.css";

class StageIndicator extends Component {
    render() {
        return (
            <div className="indicator-container">
                <h1 className="stages_title">
                    Your first project
                </h1>
                <div className="steps">
                    <div className="step_number">1</div>
                    <div className="between_numbers"></div>
                    <div className="step_number">2</div>
                    <div className="between_numbers"></div>
                    <div className="step_number active">3</div>
                </div>
            </div>
        );
    }

}

export default StageIndicator;