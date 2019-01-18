import { combineReducers } from 'Redux'
import { reducer as reduxFormReducer } from 'ReduxForm'

const reducer = combineReducers({
  form: reduxFormReducer
})

export default reducer
