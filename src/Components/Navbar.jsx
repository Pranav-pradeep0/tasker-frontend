import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ onSearch }) => {


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };


    return (
        <div className='container py-5'>
            <nav class="navbar navbar-expand-lg rounded px-5" data-bs-theme="dark">
                <div class="container-fluid">
                    <Link class="navbar-brand text-warning" to={'/'}>Tasker</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search" onSubmit={handleSearch}>
                            <input class="form-control me-2 nav-search bg-transparent" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={(e) =>setSearchQuery(e.target.value)}/>
                            <button class="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar