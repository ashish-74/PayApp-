import uuid from 'uuid';

export const payReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PAYMENT':
            return[...state, {
            title: action.payment.title,
            amount: action.payment.amount,
            id: uuid()
        }]
        case 'REMOVE_PAYMENT':
            return state.filter(payment => payment.id !== action.id)
        default:
            return state;
    }
}