import React from 'react';
import css from './Comments.module.css'
import {Link} from "react-router-dom";

const Comment = ({comments, setComments}) => {
    const {id, postId, name, body} = comments
        return (
            <div>

                <div className={css.Father}>
                    <div className={css.Mother}>
                        <div className={css.IdDiv}>
                            <h4 className={css.Id}>
                                ID: {id}
                            </h4>
                        </div>
                        <div className={css.PostIdDiv}>
                            <h4 className={css.PostId}>
                                Post ID: {postId}
                            </h4>
                        </div>
                    </div>
                    <div className={css.NameDiv}>
                        <h3 className={css.Name}>
                            {name}
                        </h3>
                    </div>
                    <div className={css.BodyDiv}>
                        <p className={css.BodyP}>
                            {body}
                        </p>
                    </div>
                    <div className="wrapper">
                        <Link className={css.A_hover} to={postId.toString()}><span>Click me</span></Link>
                    </div>
                </div>
            </div>
        );
};

export {Comment};