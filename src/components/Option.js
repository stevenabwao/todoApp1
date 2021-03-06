import React from 'react';
const Option = (props) => {
    return (
        <div className = "option">
            <p className = "option_text">{props.count}. {props.optionText}</p>
            <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >X
            </button>
        </div>
    )
}
export default Option;