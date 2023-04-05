import { createStore } from 'redux';
import { reducer } from './productsReducer';


export const store = createStore(reducer)