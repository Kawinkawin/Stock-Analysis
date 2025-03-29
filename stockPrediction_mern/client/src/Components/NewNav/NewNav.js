import React from 'react';
import { Link } from 'react-router-dom';
import './NewNav.css';
import SearchBar from '../SearchBar/SearchBar';
function NewNav({onSearch}) {
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top shadow-sm bg-white">
            <Link to="/LiveGraph" className="navbar-brand">
                <img src="logo1.jpg" alt="Logo" style={{ width: '60px', height: '50px', marginRight: '-5px' }} />
                <span className="text-success font-weight-bold ml-2">Sto</span><span className="text-danger font-weight-bold">XX</span>
            </Link>
            <div className="predict_button">
                <Link to="/PredictionPage" className="btn btn-success btn-sm ml-3">Predict</Link>
            </div>
            <div className='search_bar'>
                
                <SearchBar onSearch={onSearch}/>
            </div>
            
            
        </nav>
    );
}

export default NewNav;
