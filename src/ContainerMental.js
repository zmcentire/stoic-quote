import React from 'react';
import Quotes from './Quotes.json'
import QuoteMental from './QuoteMental'


const ContainerMental = () => {
    const mental = Quotes.MentalWellness
    const mappedMental = mental.map((quote, i) => <QuoteMental
    key={i}
                                                        Quote={quote.Quote}
                                                        Author={quote.Author}
    />)

    return(
        <div className="mental">
            {mappedMental}
        </div>
    )
}

export default ContainerMental