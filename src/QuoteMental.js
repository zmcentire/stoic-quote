import React from 'react';


const QuoteMental = (props) => {
    let {Quote, Author} = props

    return (
        <div className="quoteMental">
            <div><p>{Quote}</p></div>
            <h5>{Author}</h5>
        </div>
    )
}


export default QuoteMental