import React from 'react';
import Quotes from './Quotes.json'
import QuoteAdversity from './QuoteAdversity'


const ContainerAdversity = () => {
    const adversity = Quotes.Adversity 
    const mappedAdversity = adversity.map((quote, i) => <QuoteAdversity
    key={i}
                                                        Quote={quote.Quote}
                                                        Author={quote.Author}
    />)

    return(
        <div className="adversity">
            {mappedAdversity}
        </div>
    )
}

export default ContainerAdversity