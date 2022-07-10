import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setSearchTerm, clearSearchTerm, selectSearchTerm, setSearchType, selectSearchType} from './search-term-slice';
import {fetchUsers} from "../all-results/all-results-slice";

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

const searchTypes = ['users', 'repositories'];
export const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const searchType = useSelector(selectSearchType);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e: any) => {
        const userInput = e['target']['value'];
        console.log(userInput.length)
        dispatch(setSearchTerm(userInput));
        if (userInput.length >= 3) {
            fetchUsers(dispatch, userInput, searchType);
        }
    };

    const onSearchTypeChanged = (e: any) => {
        const userInput = e['target']['value'];
        console.log(e['target']['value'])
        dispatch(setSearchType(userInput));
        fetchUsers(dispatch, searchTerm, userInput);
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div className="search-params">
            <div className="search-container col-md-9">
                <img id="search-icon" alt="" src={searchIconUrl}/>
                <input
                    className="search"
                    type="text"
                    value={searchTerm}
                    onChange={onSearchTermChangeHandler}
                    placeholder="Search"
                />
                {(searchTerm || '').length > 0 && (
                    <button
                        onClick={onClearSearchTermHandler}
                        type="button"
                        id="search-clear-button"
                    >
                        <img src={clearIconUrl} alt=""/>
                    </button>
                )}
            </div>
            <div className="search-container col-md-3">
                <select className="search" onChange={onSearchTypeChanged}>
                    {(searchTypes || []).map((type, idx) => (
                        <option value={type} key={type}>{type}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};