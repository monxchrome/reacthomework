import {Comment} from "./Comment";

const Comments = ({comment}) => {

        return (
            <div>
                {comment.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
};

export {Comments};