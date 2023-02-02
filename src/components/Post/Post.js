import React, {useState} from 'react';
import css from './Post.module.css'

const Post = ({posts}) => {

    const {title, body} = posts

        return (
            <div>
                <div className={css.Father}>
                    <div className={css.TitleDiv}>
                        <h4 className={css.Title}>
                            {title}
                        </h4>
                    </div>
                    <div className={css.BodyDiv}>
                        <p className={css.Body}>
                            {body}
                        </p>
                    </div>
                </div>
            </div>
        );
};

export {Post};