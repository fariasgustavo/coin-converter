import React from 'react';
import { createStore } from 'redux';

const INITIAL_STATE  = {
    baseCurrency: {
        'name': 'USD',
        'value': '1'
    },
    applyCurrency:{
            'name': '',
            'value': '',
            'base': ''
        }
};

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'ALL_CURRENCIES'){
        return{ ...state, currencies: action.currencies,applyCurrency: action.applyCurrency, baseCurrency: action.baseCurrency}
    }else if(action.type === 'UPDATE_APPLY_CURRENCY'){
        return { ...state, applyCurrency: action.applyCurrency}
    }else if(action.type === 'CHANGE_BASE_CURRENCY_VALUE' || action.type === 'CHANGE_APPLY_CURRENCY_VALUE'){
        return { ...state, applyCurrency: action.applyCurrency,baseCurrency: action.baseCurrency}
    }

    return state;
}

const store = createStore(reducer);

export default store;