let temp = [];
export default function CartReducer (state = temp, action){
    switch(action.type){
        case "add":
            return [...state,action.payload];
        default : return state;    
    }
}