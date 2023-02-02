import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import {Album} from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll()
            .then(({data}) => setAlbums([...data]))
    }, [])

        return (
            <div>
                {albums.map(item => <Album key={item.id} albums={item}/>)}
            </div>
        );
};

export {Albums};