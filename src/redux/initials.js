export const contactsInitialState ={
    items: [],
    contacts: {
        isLoading: false,
        error: null
    },
    filter: ""    
};
export const authInitialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
};