import React from 'react';

function SimpleHeader(props){

    const headerHeadingStyle = {
        'background-color': props.Color, 
        'color': 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'font-size': '50px',
        'line-height': '200px',
    }

    return(
        <div className="AboutHeader">
            <h1 className={`fadeText`} style={headerHeadingStyle}>{props.Title}</h1>
        </div>
    );
}

export default SimpleHeader;