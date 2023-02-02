import {useParams} from "react-router-dom";

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