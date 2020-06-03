import React, {Component} from 'react';
import "./Form.css";

class FormInputs extends Component {
    constructor() {
        super();
        this.state = {
            companyName: "",
            countOfPeople: "",
            businessArea: "",
            descriptionArea: "",
            files: "",
            numberError: "",
            businessError: "",
            descriptionError: "",
            countErrorMessage: "",
            businessErrorMessage: "",
            descriptionErrorMessage: ""
        }
    }

    changeCompanyName = (event) => {
        this.setState({companyName: event.target.value});

    }
    changeCountOfPeople = (event) => {
        this.setState({countOfPeople: event.target.value.replace(/\D/,'')});
    }
    changeBusinessArea = (event) => {
        this.setState({businessArea: event.target.value});
    }
    changeDescriptionArea = (event) => {
        this.setState({descriptionArea: event.target.value});
    }
    onChangeFile = (event) => {
        this.setState({files: event.target.files})
    }
    focusCountOfPeople = (event) => {
        this.setState({numberError: ""});
        this.setState({countErrorMessage: ""});
    }
    blurCountOfPeople= (event) => {
        if(this.state.countOfPeople == ""){
            this.setState({numberError: "number_error"});
            this.setState({countErrorMessage: "This field in required"});
        } else if(this.state.countOfPeople.charAt(0) == 0){
            this.setState({countErrorMessage: "Please enter number from 1 to 99"});
            this.setState({numberError: "number_error"});
        } else if(this.state.countOfPeople == 0){
            this.setState({numberError: "number_error"});
            this.setState({countErrorMessage: "Please enter number from 1 to 99"});
        } else if(this.state.countOfPeople.length > 2){
           this.setState({numberError: "number_error"});
            this.setState({countErrorMessage: "Please enter number from 1 to 99"});
        } else {
            this.setState({numberError: ""});
            this.setState({countErrorMessage: ""});
        }
    }
    focusBusinessArea = (event) => {
        this.setState({businessError: ""});
        this.setState({businessErrorMessage: ""});
    }
    blurBusinessArea= (event) => {

        if(this.state.businessArea == ""){
            this.setState({businessError: "business_error"});
            this.setState({businessErrorMessage: "This field in required"});
        } else {
            this.setState({businessError: ""});
            this.setState({businessErrorMessage: ""});
        }
    }
    focusDescriptionArea = (event) => {
        this.setState({descriptionError: ""});
        this.setState({descriptionErrorMessage: ""});
    }
    blurDescriptionArea = (event) => {
        if(this.state.descriptionArea == ""){
            this.setState({descriptionError: "description_error"});
            this.setState({descriptionErrorMessage: "This field in required"});
        } else {
            this.setState({descriptionError: ""});
            this.setState({descriptionErrorMessage: ""});

        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.countOfPeople == "" && this.state.businessArea == "" && this.state.descriptionArea == ""){
            this.setState({numberError: "number_error"});
            this.setState({businessError: "business_error"});
            this.setState({descriptionError: "description_error"});
        } else if(this.state.countOfPeople == "" && this.state.businessArea == "" ){
            this.setState({numberError: "number_error"});
            this.setState({businessError: "business_error"});
        } else if(this.state.countOfPeople == "" && this.state.descriptionArea == ""){
            this.setState({numberError: "number_error"});
            this.setState({descriptionError: "description_error"});
        } else if(this.state.businessArea == "" && this.state.descriptionArea == ""){
            this.setState({businessError: "business_error"});
            this.setState({descriptionError: "description_error"});
        } else  if(this.state.countOfPeople == ""){
            this.setState({numberError: "number_error"});
        } else if(this.state.businessArea == ""){
            this.setState({businessError: "business_error"});
        } else if(this.state.descriptionArea == ""){
            this.setState({descriptionError: "description_error"});
        } else {
            console.log(this.state.descriptionArea, this.state.countOfPeople, this.state.businessArea, this.state.descriptionArea);


            for(let i = 0; i < this.state.files.length; i++ ){
                console.log(this.state.files[i].name);
            }

            this.setState({companyName: ""});
            this.setState({countOfPeople: ""});
            this.setState({businessArea: ""});
            this.setState({descriptionArea: ""});
            this.setState({files: ""});
        }
    }


    render() {
        return (
            <div className="form_area">
                <form onSubmit={this.handleSubmit}>
                    <div className="top_inputs">
                        <div className="name_container">
                            <label htmlFor="company_name">Your company name</label>
                            <input id="company_name" className="form_input" type="text" placeholder="Type text"
                                   onChange={this.changeCompanyName}

                                   value={this.state.companyName}
                            />
                            <p className="not_valid_name"></p>
                        </div>
                        <div className="count_container">
                            <label htmlFor="number_of_people">Number of people <span className="require_label">*</span></label>
                            <input id="number_of_people"className={"form_input " + this.state.numberError} type="text" placeholder="1-99"
                                   onChange={this.changeCountOfPeople}
                                   onFocus={this.focusCountOfPeople}
                                   onBlur={this.blurCountOfPeople}
                                   value={this.state.countOfPeople}
                            />
                            <p className="not_valid_count">{this.state.countErrorMessage}</p>
                        </div>
                    </div>

                    <div className="business_container">
                        <label htmlFor="business_area">Business area <span className="require_label">*</span></label>
                        <input id="business_area" className={"form_input " + this.state.businessError} type="text" placeholder="Design, Marketing, Development, etc."
                               onChange={this.changeBusinessArea}
                               onFocus={this.focusBusinessArea}
                               onBlur={this.blurBusinessArea}
                               value={this.state.businessArea}
                        />
                        <p className="not_valid_business">{this.state.businessErrorMessage}</p>
                    </div>
                    <div className="description_container">
                        <label htmlFor="description_area">Description <span className="require_label">*</span></label>
                        <textarea id="description_area"
                                  className={"form_input_area " + this.state.descriptionError}
                                  placeholder="Type text"
                                  onChange={this.changeDescriptionArea}
                                  onFocus={this.focusDescriptionArea}
                                  onBlur={this.blurDescriptionArea}
                                  value={this.state.descriptionArea}
                        ></textarea>
                        <p className="not_valid_description">{this.state.descriptionErrorMessage}</p>
                    </div>
                    <div className="file-container">
                        <input id="file_input" className="file_input" type="file" name="file_input" multiple
                               onChange={this.onChangeFile}
                        />
                        <label htmlFor="file_input" className="file_input_label">
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7 3.725H21.6C22.9236 3.725 24 4.8026 24 6.125V18.125C24 19.4486 22.9236 20.525 21.6 20.525H2.4C1.0764 20.525 0 19.4486 0 18.125V2.525C0 1.2026 1.0764 0.125 2.4 0.125H7.8C8.5512 0.125 9.27 0.4838 9.72 1.085L11.7 3.725ZM2.4 2.525V18.125H21.6012L21.6 6.125H11.7C10.9488 6.125 10.23 5.7662 9.78 5.165L7.8 2.525H2.4ZM11.0571 8.35391H12.9428V11.1825H15.7714V13.0682H12.9428V15.8968H11.0571V13.0682H8.22851V11.1825H11.0571V8.35391Z" fill="#333333"/>
                            </svg> Add file as attachment</label>
                        <p className="count_files">{this.state.files.length} files attached</p>
                    </div>
                    <div className="submit-container">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default FormInputs;