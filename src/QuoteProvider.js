import React, {Component} from 'react'
import quotes from './Quotes.json'
const {Provider, Consumer} = React.createContext()


class QuoteProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
        }
    }

    getQuote = () => {
    const allQuotes = [
        ...quotes.Adversity,
        ...quotes.Mortality,
        ...quotes.MentalWellness
    ]
    
    const randomIndex = Math.floor(Math.random() * allQuotes.length)
    const randomQuote = allQuotes[randomIndex]
    
    this.setState({
        quote: randomQuote.Quote,
        author: randomQuote.Author
    })

}

    render(){
        return (
            <Provider value = {{
                ...this.state,
                getQuote: this.getQuote
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default QuoteProvider

export function withProvider (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props}/>}
                    </Consumer>
}