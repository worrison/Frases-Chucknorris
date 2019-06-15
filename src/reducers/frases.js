let initialState={
    frases:[]
}
function reducer (state=initialState, action){
    switch(action.type){
        case 'ADD_FRASE':
            return {
                // ...state,
                frases:[...state.frases, {text: action.text}],
            };

        default: return state;
    }
}
export default reducer