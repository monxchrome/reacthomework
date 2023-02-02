import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services";
import {Posts} from "../../components";

const PostPage = () => {

    const {postId} = useParams();

        return (
            <div>
                <Posts postId={postId}/>
            </div>
        );
};

export {PostPage};