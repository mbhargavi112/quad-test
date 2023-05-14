import React, { Component, useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



function Details() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [movieDetails, setmovieDetails] = useState();
    const [isFormEnabled, setisFormEnabled] = useState()
    const navigate = useNavigate();

    const book = () => {
        setisFormEnabled(true)
    }

    const bookForm = () => {
        alert("Thanks you for booking !!")
        navigate("/")

    }

    const resetAsyncForm = useCallback((data) => {
        console.log(data)
        reset(data.show)
    }
    )

    useEffect(() => {
        const details = localStorage.getItem("details");
        setmovieDetails(JSON.parse(details))
        resetAsyncForm(JSON.parse(details))
        setisFormEnabled(false)
    }, [])
    return (
        <div>
            {movieDetails ? <div className='card'>
                <div className='d-flex justify-content-center align-items-center h-70'>
                    <img className="movie-details" src={movieDetails ? movieDetails.show.image.original : ""} alt={movieDetails.show.name}></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{movieDetails.show.name}</h5>
                    {movieDetails.show.summary}
                </div>
            </div> : ""}
            {!isFormEnabled ? <button className='btn btn-primary' onClick={() => book()}>Book</button> : ""}
            <div className='d-flex align-self-center justify-content-center'>
                {isFormEnabled ? <form onSubmit={handleSubmit(bookForm)}>
                    <h3>Booking Form</h3>
                    <div className='m-2'>
                        <input type="text" {...register('name', { required: true })} className="form-control" readOnly placeholder="moviename"></input>
                    </div>
                    <div className='m-2'>
                        <input type="text" {...register('language', { required: true })} className="form-control" readOnly placeholder="language" ></input>
                    </div>
                    <div className='m-2'>
                        <input type="text" {...register('premiered', { required: true })} className="form-control" readOnly placeholder="premiered" ></input>
                    </div>
                    <div className='m-2'>
                        <input type="number" {...register('seats', { required: true })} className="form-control" placeholder="No.of seats" ></input>
                        {errors.seats && <span className='text-danger'>please enter the seats</span>}
                    </div>
                    <div className='m-2'>
                        <button type="submit" className="btn btn-primary">Book</button>
                    </div>
                </form> : ""}
            </div>
        </div>
    );
}

export default Details;