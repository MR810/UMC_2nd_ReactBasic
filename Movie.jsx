// Movie.jsx
import React, { useState } from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Movie({ title, poster_path, vote_average, overview }) {
    const [showOverview, setShowOverview] = useState(false);

    return (
        <div 
            className='movie-container' 
            onMouseEnter={() => setShowOverview(true)} 
            onMouseLeave={() => setShowOverview(false)}
        >
            <img 
                src={IMG_BASE_URL + poster_path} 
                alt="영화포스터" 
                style={{ cursor: 'pointer' }} 
            />
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
            {showOverview && (
                <div className='overview'>
                    <p>{title}</p>
                    <p>{overview}</p>
                </div>
            )}
        </div>
    );
}
