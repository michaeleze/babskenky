import {INCREMENT} from './actionConstant';


export const Products = (state = [], action) => {
         return state
}

export const Cat = (state = null, action) =>{
    return state
}

export const Count = (state = null, action) =>{
    switch(action.type){
        case INCREMENT:
            console.log('increasing state')
           return state + 1
        default:
            return state
    }
}