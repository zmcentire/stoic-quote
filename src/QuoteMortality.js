import React from 'react';


const QuoteMortality = (props) => {
    let {Quote, Author} = props

    return (
        <div className="quoteMortality">
            <div><p>{Quote}</p></div>
            <h5>{Author}</h5>
        </div>
    )
}


export default QuoteMortality