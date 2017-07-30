import { THEME_CHANGE_COLOR } from '../actions/themes';

const initialState = {
    primaryColor: '#4F6D7F'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case THEME_CHANGE_COLOR:
            return {
                ...state,
                primaryColor: action.color
            };
        break;
        default:
            return state;
    }
}