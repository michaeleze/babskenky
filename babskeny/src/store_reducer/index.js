import {combineReducers} from 'redux';
import {Products,Cat,Count} from './reducer';


export default combineReducers({products:Products, cat:Cat,count:Count})