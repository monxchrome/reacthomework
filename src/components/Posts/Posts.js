import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import {postService} from "../../services/postService";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll
            .then(value => value.data)
            .then(value => setPosts([...value]))
    }, [])

        return (
            <div>
                <h1>Post Details:</h1>
                {postDetails &&
                    <div>
                        <div>
                            Title: {postDetails.title}
                        </div>
                        <div>
                            Body: {postDetails.body}
                        </div>
                    </div>
                }
                <hr/>
                <h1>Posts:</h1>
                {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
            </div>
        );
};

export {Posts};