import { createStore, combineReducers } from 'redux';
import {searchTermReducer, searchTypeReducer, usersSearchReducer} from "./features/search-term/search-term-slice";
export const store = createStore(combineReducers({
    searchTerm: searchTermReducer,
    searchType: searchTypeReducer,
    users: usersSearchReducer
}));