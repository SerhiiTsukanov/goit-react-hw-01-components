import PropTypes from 'prop-types';
import {
  ItemFriends,
  FriendsBox,
  StatusFriends,
  AvatarFriends,
  NameFriends,
} from '../FriendList/FriendList.styled';

export default function FriendListItem({ friends }) {
    return (
          
        <ItemFriends key={friends.id}>
                <FriendsBox>
                <StatusFriends isOnline={friends.isOnline}>{friends.isOnline}</StatusFriends>
                    <AvatarFriends src={friends.avatar} alt="User avatar" width="48" />
                    <NameFriends>{friends.name}</NameFriends>  
                </FriendsBox>
               
        </ItemFriends>
        )
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