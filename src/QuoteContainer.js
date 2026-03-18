import React, {Component} from 'react'
import {withProvider} from './QuoteProvider'
import Quote from './Quote'

class QuoteContainer extends Component {
    componentDidMount(){
        this.props.getQuote()

    }

    handleChange = () => {
        this.props.getQuote()
    }

    render() {
        // const mappedQuote = this.props.quotes.map(quote => <Quote info = {quote} />)

        return (
            <div className = 'quote-container'>
                <Quote />
                {/* <button onClick = {this.handleChange}>New Quote</button> */}
            </div>
        )
    }

}

export default withProvider(QuoteContainer)