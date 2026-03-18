import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import QuoteProvider from './QuoteProvider'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDom.render(<BrowserRouter>
                    <QuoteProvider>
                        <App/>
                    </QuoteProvider>
                </BrowserRouter>
, document.getElementById('root'))