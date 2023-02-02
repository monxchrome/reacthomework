import React from 'react';

import css from './Main.module.css'

const MainPage = () => {

    const iphone = 'https://www.pngmart.com/files/22/iPhone-14-Pro-Max-PNG-File.png'

        return (
            <div>
                <div className={css.Father}>
                    <div className={css.NewDiv}>
                        <p className={css.New}>
                            New
                        </p>
                    </div>

                    <div className={css.TitleDiv}>
                        <h4 className={css.Title}>
                            iPhone 14 Pro
                        </h4>
                    </div>

                    <div className={css.ModelDiv}>
                        <h3 className={css.Model}>
                            Pro Beyond
                        </h3>
                    </div>

                    <div>
                        <img src={iphone} alt=""/>
                    </div>

                </div>
            </div>
        );
};

export {MainPage};