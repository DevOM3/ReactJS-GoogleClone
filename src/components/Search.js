import './Search.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";

const Search = () => {
    const [input, setInput] = useState("");
    const history = useHistory();
    const [{ }, dispath] = useStateValue();

    useEffect(() => {
        document.getElementsByTagName('input')[0].onfocus = () => {
            document.getElementsByClassName('search__input')[0].style.boxShadow = '0px 0px 7px -1px white';
        }

        document.getElementsByTagName('input')[0].onblur = () => {
            document.getElementsByClassName('search__input')[0].style.boxShadow = '0px 0px 0px white';
        }
    }, []);

    const search = (e) => {
        e.preventDefault();

        dispath({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });

        history.push('/search');
    };

    return (
        <div className="search">
            <form className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <Button type="submit" onClick={search} size="small" />
            </form>
        </div>
    )
}

export default Search
