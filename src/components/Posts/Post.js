import {Component} from "react";

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, title, body} = this.props.posts
        return (
            <div>
                <div>
                    <h4>{id}</h4>
                </div>
                <div>
                    <h4>
                        {title}
                    </h4>
                </div>
                <div>
                    <p>
                        {body}
                    </p>
                </div>
            </div>
        )
    }
}

export {
    Post
}