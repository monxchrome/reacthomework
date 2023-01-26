import {User} from "./User";


const Users = ({users}) => {

        return (
            <div>
                {users.map(item => <User key={item.id} user={item}/>)}
            </div>
        );
};

export {Users};