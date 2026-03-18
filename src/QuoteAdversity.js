import React from 'react';


const QuoteAdversity = (props) => {
    let {Quote, Author} = props

    return (
        <div className="quoteAdversity">
            <div><p>{Quote}</p></div>
            <h5>{Author}</h5>
        </div>
    )
}


export default QuoteAdversity