import React from 'React'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {doScreenshot} from './screenshot'

const dest = document.getElementById('content')
const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension ?
    window.devToolsExtension()(createStore) :
    createStore)(reducer)

const showResults = values =>
    new Promise(resolve => {
        setTimeout(() => {
            // simulate server latency
            window.alert('Application submitted successfully')
            resolve()
        }, 500)
        doScreenshot();
    })

let render = () => {
    const WizardForm = require('./WizardForm').default

    ReactDOM.hydrate(
        <Provider store={store}>
      

        <WizardForm onSubmit={showResults} />

     

       
    
    </Provider>,
        dest
    )
}

render()