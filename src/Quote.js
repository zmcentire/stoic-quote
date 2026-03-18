import React from 'react'
import {withProvider} from './QuoteProvider'

class Quote extends React.Component {
    constructor(){
        super();

        this.state = {
            
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.props.getQuote()
    }

    render (){
        console.log(this.quote)
        const {quote, author} = this.props
        

        return (
            
            <div className = 'quote'>
                <div><p>{quote}</p></div>
                <h5>{author}</h5>
                <button onClick = {this.handleChange}>New Quote</button>
            </div>
        )
    }
}

export default withProvider(Quote)