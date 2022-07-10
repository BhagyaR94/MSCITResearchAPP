export default (state = null, action) => {
    switch (action.type) {
        case 'change_access_token':
            return action.payload;
        default:
            return state;
    }
}; 