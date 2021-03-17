import React ,{useState,useEffect} from 'react';

const SpM = (props) => {
    return (
        <>
         {props.movies.map((movie, index)=>{
             return (
             <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} className='ass'></img>
                <div className='overlay d-flex align-items-center justify-content-center '></div>
             </div>
             )
         })}   
        </>
    );
};

export default SpM;