import FriendListItem from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.css';

export default function FriendList({ friends }) {
    
    return (
        <ul class="friend-list">
            <FriendListItem
                friends={friends}
                
            />
        </ul>
    );
}






