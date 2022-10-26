import css from '../FriendListItem/FriendListItem.css';

export default function FriendListItem({ friends }) {
    return (
        <li class="item">
            {friends.map(friend => (
                <div key={friends.id}>
                   <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="name">{friend.name}</p>  
                </div>
               
            ))}
            
        </li>
    );
}



