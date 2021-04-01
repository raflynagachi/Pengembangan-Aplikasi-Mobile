const initialState = {
    movies : []
} 

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case "STORE" :
            return {
                ...state , 
                movies : action.data
            }
        default : 
            return state
    }
}

export default reducer