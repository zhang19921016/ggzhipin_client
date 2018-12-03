/*
* 管理状态
* */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//引入reducers
import reducers from './reducers'
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));