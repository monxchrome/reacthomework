import {Component} from "react";
import {userService} from "../../services";
import {User} from "./User";

class ClassUser extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount() {
        userService.getAll()
            .then(({data}) => this.setState({users: [...data]}))
    }

    render() {
        return (
            <div>
                {this.state.users.map(item => <User key={item.id} users={item}/>)}
            </div>
        )
    }
}

export {
    ClassUser
}