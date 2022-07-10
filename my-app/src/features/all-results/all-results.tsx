import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from "./all-results-slice";
import {
    selectSearchTerm,
    selectSearchType,
    selectUsers,
    setSearchTerm,
    setSearchType
} from "../search-term/search-term-slice";
import {RepositoryCard} from "../../components/repository-card";
import {UserCard} from "../../components/user-card";


export const AllResults = () => {
    const allResults = useSelector(selectUsers);
    console.log(allResults)
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const searchType = useSelector(selectSearchType);

    const onFirstRender = () => {
        dispatch(setSearchType('users'));
    }
    useEffect(onFirstRender, []);

    return (
        <div className="results-container"> {
            (allResults || []).map((res: any) => (searchType === 'users' ?
                    <UserCard user={res} key={res.id}/> :
                    <RepositoryCard repo={res} key={res.id}/>
            ))}
        </div>
    );
};



