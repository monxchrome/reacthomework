import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "./Post";

const Posts = ({postId}) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        postsService.getById(postId)
            .then(({data}) => setPost([data]))
    }, [])

        return (
            <div>
                {post.map(item => <Post key={item.id} posts={item}/>)}
            </div>
        );
};

export {Posts};