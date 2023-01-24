import React, {useEffect, useState} from 'react';

import {postService} from "../../api";
import {Post} from "./Post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getByUserId(userId)
            .then(value => value.data)
            .then(value => setPosts([...value]))
    }, [userId])

        return (
            <div>
                {posts.map(item => <Post key={item.id} post={item} />)}
            </div>
        );
};

export {Posts};