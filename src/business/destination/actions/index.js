export const addMenuItems = (menuData) => {
    return {
        type: 'add_menu_items',
        payload: menuData
    };
}

export const changeAccessToken = (token) => {
    return {
        type: 'change_access_token',
        payload: token
    };
};