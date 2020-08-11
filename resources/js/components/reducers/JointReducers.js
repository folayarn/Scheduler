import GlobalReducer from './Global'
import DataReducer from './Data'
import SingleReducer from './Single'
import colorReducer from './Color'
import {combineReducers} from 'redux'

const allReducers= combineReducers({
    data:DataReducer,
    globals:GlobalReducer,
    single:SingleReducer,
    color:colorReducer
})

export default allReducers
