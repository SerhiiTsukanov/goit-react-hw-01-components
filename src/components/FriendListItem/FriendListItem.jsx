
import PropTypes from 'prop-types';

export default function FriendListItem({ friends }) {
    return (
        <li className="item">
            {friends.map(friend => (
                <div class="box" key={friends.id}>
                   <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="name">{friend.name}</p>  
                </div>
               
            ))}
            
        </li>
    );
}


