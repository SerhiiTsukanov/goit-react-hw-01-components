import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    
    return (
        <ul class="friend-list">
            <FriendListItem 
                friends={friends}
                
            />
        </ul>
    );
}






