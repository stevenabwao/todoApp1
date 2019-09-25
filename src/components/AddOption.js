import React from 'react';
class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: null
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error
            }
        })
        e.target.elements.option.value ='';
    }
    render() {
        return (
            <div>
                {this.state.error && <p className = "add-option_error">{this.state.error}</p>}
               <form className = "add-option" onSubmit={this.handleAddOption}>
                   <input className = "add-option__input" type ="text" name="option" />
                   <button className="button">AddOption</button>
               </form>
            </div>
        )
    }
}

export default AddOption;
