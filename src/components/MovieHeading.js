import React from 'react';

const MovieHeading = (props) => {
    return (
        <div className='row'>
           <h1 style={{fontStyle:'normal'}}>{props.heading}</h1> 
           <img src="https://img.guildedcdn.com/TeamAvatar/d4d130639ea2641fa17b0b3d10db4a36-Large.png?w=450&h=450" style={{width:90}}></img>
        </div>
    );
};

export default MovieHeading;