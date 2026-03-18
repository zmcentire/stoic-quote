import React from 'react';
import Quotes from './Quotes.json'
import QuoteMortality from './QuoteMortality'


const ContainerMortality = () => {
    const mortality = Quotes.Mortality 
    const mappedMortality = mortality.map((quote, i) => <QuoteMortality
    key={i}
                                                        Quote={quote.Quote}
                                                        Author={quote.Author}
    />)

    return(
        <div className='mortality'>
            {mappedMortality}
        </div>
    )
}

export default ContainerMortality