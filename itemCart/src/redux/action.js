function buyItem(){
    return{
        type: 'BUY_ITEM'
    }
}

function decrlItem(){
    return {
        type: 'DECR_ITEM'
    }
}

function cancelItem(){
    return {
        type: 'CANCEL_ITEM'
    }
}

const actionCreators = {
    buyItem,
    decrlItem,
    cancelItem
}

export {actionCreators};
