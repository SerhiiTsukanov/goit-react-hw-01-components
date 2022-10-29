
import PropTypes from 'prop-types';
import {
  FrList,
  ItemFriends,
  FriendsBox,
  StatusFriends,
  AvatarFriends,
  NameFriends,
} from './FriendList.styled';


export default function FriendListItem({ friends }) {
    return (
     <FrList>
        {friends.map(friend => (
          
        <ItemFriends key={friend.id}>
                <FriendsBox>
              <StatusFriends isOnline={friend.isOnline}>{friend.isOnline}</StatusFriends>
              
              
                    <AvatarFriends src={friend.avatar} alt="User avatar" width="48" />
                    <NameFriends>{friend.name}</NameFriends>  
                </FriendsBox>
               
        </ItemFriends>
        )
        )} 
      </FrList>
    );
}

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

