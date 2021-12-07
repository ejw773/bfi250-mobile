import { CHANGE_SHOW_SET } from '../actionTypes'

const initialState = {
    showSet: 'view-all'
};

export default function showSet(state = initialState, action) {
    console.log('change show set reducer fired')
    switch(action.type) {
        case CHANGE_SHOW_SET: {
            return {
                ...state,
                showSet: action.payload.newSet
            }
        }
        default: return state;
    }
}
