import { ADD_TO_CART,REMOVE_CART} from "../Constant";

const initialState = {
    cartData:[]
}

export default function cartItems(state=[],action){
    switch(action.type){
        case ADD_TO_CART:
            // console.warn('reducer',action);
            return[
                ...state,
               {cartData:action.data}   //adding cart item
            ]
          break;

          case REMOVE_CART :
            console.warn('reducer',action);
            state.pop() // to remove item
            return[
                ...state,
            //    {cartData:action.data}
            ]
          break;

          default:
            return state
    }
}