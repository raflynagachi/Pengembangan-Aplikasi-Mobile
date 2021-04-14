const initialState = {
    stock: 0
}

const menuItem = (state = initialState, action) => {
    switch(action.type){
        case 'BUY_ITEM':
            return {
                ...state,
                stock: state.stock + 1
            }
        case 'DECR_ITEM':
            return {
                ...state,
                stock: state.stock <= 0 ? 0 : state.stock -1
            }
        case 'CANCEL_ITEM':
            return {
                ...state,
                stock: 0
            }
        default: return state
    }
}

export default menuItem;