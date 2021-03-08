function buyItem(){
    return{
        type: 'BUY_ITEM'
    }
}

function decrItem(){
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
    decrItem,
    cancelItem
}

export {actionCreators};
