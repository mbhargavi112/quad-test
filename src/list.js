import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function List() {

    const [movieList, setMovieList] = useState();
    const navigate = useNavigate();


    const getMovieList = async () => {
        let details = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        setMovieList(details.data);
    }

    const redirect = (details) => {
        localStorage.setItem("details",JSON.stringify(details))
        navigate("/details")
    }

    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <div className='product-container'>

            {movieList && movieList.map((el, i) => {
                return (
                    <div className="card" key={i}>
                        <div className='d-flex h-50 justify-content-center align-items-center h-70'>
                            <img className=" movie" src={el.show.image ? el.show.image.original : ""} alt={el.show.name}></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{el.show.name}</h5>
                            <p className="card-text"><b>language: </b>{el.show.language}</p>
                            <p className="card-text"><b>premiered: </b>{el.show.premiered}</p>
                            <button className='btn btn-primary text-center w-100' onClick={()=>redirect(el)}>Details</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default List;