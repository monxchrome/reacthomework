import {Component} from "react";

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, username} = this.props.users

        return (
            <div>
                <div>
                    <h4>
                        {id}
                    </h4>
                </div>
                <div>
                    <h4>
                        {name}
                    </h4>
                </div>
                <div>
                    <h5>
                        {username}
                    </h5>
                </div>
            </div>
        )
    }
}

export {
    User
}