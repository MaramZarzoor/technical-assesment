const initialState = ''

export const searchTermReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state;
    }
}
export const searchTypeReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'searchTerm/setSearchType':
            return action.payload;
        case 'searchTerm/clearSearchType':
            return '';
        default:
            return state;
    }
}

export function setSearchTerm(term: any) {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export function setSearchType(type: any) {
    return {
        type: 'searchTerm/setSearchType',
        payload: type
    }
}


export function clearSearchTerm() {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

export const selectSearchTerm = (state: any) => state.searchTerm;
export const selectSearchType = (state: any) => state.searchType;

export const usersSearchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'users/getUsers':
            return action.payload;
        default:
            return state;
    }
}
export const selectUsers = (state: any) => state.users;
