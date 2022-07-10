import axios from 'axios';

export const setUsers = (res: any) => {
    return {
        type: 'users/getUsers',
        payload: res
    }
};

export const fetchUsers = (dispatch: any, searchTerm: any, type: any) => {
    axios.get(`https://api.github.com/search/${type}?q=${searchTerm || ''}`)
        .then(res => {
            dispatch(setUsers(res['data']['items'] || []));
        })
}



