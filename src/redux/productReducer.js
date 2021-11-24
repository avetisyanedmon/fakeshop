const initialState = {
    results: [],
    cartItems: [],
    cartItemsPrice: 0,
    moneySum: 0
  }

export const productReducer = (state = initialState, action) => {
    switch(action.type){
      case 'ADD_RESULTS':
        return {
          ...state,
          results: action.payload
        }
      case 'ADD_TO_CART' :
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            action.payload
          ]
        }
      case 'ADD_BALANCE' :
        return {
          ...state,
          moneySum: state.moneySum + Number(action.payload)
        }
      case 'BUY_ITEM':
        return  {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
          moneySum: state.moneySum - action.payload.price
        }
        default: return state
    } 
}