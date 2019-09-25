import React from 'react';
//use function components for component that do not have state
const Action = (props) => {
    return (
    <div>
          <button
          className="big-button" 
          onClick={props.handlePick}
          disabled={!props.hasOptions}
          >What should i do?
          </button>
    </div>  
    )
}

export default Action;