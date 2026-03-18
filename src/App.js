import React from 'react'
import {withProvider} from './QuoteProvider'
import QuoteContainer from './QuoteContainer'
import NavBar from './NavBar'
import About from './About'
import ContainerAdversity from './ContainerAdversity'
import ContainerMetnal from './ContainerMental'
import ContainerMortality from './ContainerMortality'
import './App.css'
import {Switch, Route} from 'react-router-dom'

const App = () => {
    return(
        <div className = 'App'>
            <NavBar/>
            <div className='body'>
                <Switch>
                    <Route exact path = "/" component={QuoteContainer}/>
                    <Route exact path = "/about" component={About}/>
                    <Route exact path = "/Adversity" component={ContainerAdversity}/>
                    <Route exact path = "/Mental" component={ContainerMetnal}/>
                    <Route exact path = "/Mortality" component={ContainerMortality}/>
                </Switch>
            </div>
        </div>
    )
    
}

export default withProvider(App)