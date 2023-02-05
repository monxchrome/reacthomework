import {Component} from "react";
import {postService} from "../../services";
import {Post} from "./Post";

class ClassPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        postService.getAll()
            .then(({data}) => this.setState({posts: [...data]}))
    }


    render() {
        return (
            <div>
                {this.state.posts.map(item => <Post key={item.id} posts={item}/>)}
            </div>
        )
    }
}

export {
    ClassPosts
}