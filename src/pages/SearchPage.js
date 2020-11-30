import './SearchPage.css';
import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from "./response";
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    // const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.freelogodesign.org/file/app/client/thumb/d6b27cd7-a4e1-49df-be84-dbf3491f3bda_200x200.png?1602146837362" alt="" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search />
                </div>
            </div>

            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" src={
                                        item.pagemap?.cse_image[0]?.sec
                                    } alt="" />
                                )}
                                {item.displayLink}
                            </a>

                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;
