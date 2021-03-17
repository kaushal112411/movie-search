import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='col sol-sm-4 pl-4'>
            <input className='forms-control' value={props.value}
            onChange={(event)=>{
                props.setSearch(event.target.value);
            }}
            ></input>
        </div>
    );
};

export default SearchBox;