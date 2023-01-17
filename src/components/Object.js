import React from 'react';

export const Object = ({img, name, gender, status, species, id}) => {
    return (
        <div>
            <div className='img-div'>
                <img className='img' src={img} alt=""/>
            </div>
            <div>
                <h3 className='name'>Name - {name}</h3>
            </div>
            <div>
                <h4 className='gender'>Gender - {gender}</h4>
            </div>
            <div>
                <h4 className='status'>Status: {status}</h4>
            </div>
            <div>
                <p className='species'>Species - {species}</p>
            </div>
            <div>
                <p className='id'>ID: {id}</p>
            </div>
        </div>
    );
}