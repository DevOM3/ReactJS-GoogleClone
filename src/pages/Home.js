import './Home.css';
import React from 'react';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">
            <div className="home__body">
                <img src="https://www.freelogodesign.org/file/app/client/thumb/d6b27cd7-a4e1-49df-be84-dbf3491f3bda_200x200.png?1602146837362" alt="" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home;
