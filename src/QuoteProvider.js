import React, {Component} from 'react'
import Axios from 'axios'
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
        Axios.get('https://randomstoicquotesapi.herokuapp.com/api/v1/quotes').then(res =>{
            let data = res.data.data
            let included = res.data.included
            let quoteNum = Math.floor(Math.random() * data.length)
            // let authorNum = Math.floor(Math.random() * included.length)
            let randomQuote = data[quoteNum]
            let authId = +randomQuote.relationships.author.data.id
            let author = included.find(auth => auth.id === authId)
            // console.log(author.attributes.name)
            // let randomAuthor = included[authorNum]
            // console.log(randomAuthor)
            // if(+randomQuote.relationships.author.data.id === +randomAuthor.id){
                this.setState({
                    quote: randomQuote.attributes.text,
                    author: author.attributes.name
                })
                // quote: randomQuote.attributes.text,
                // author: randomAuthor.attributes.name
            // }
        })
    }

    render() {
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