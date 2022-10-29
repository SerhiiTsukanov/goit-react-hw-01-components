import PropTypes from 'prop-types';
import { FaAtom } from 'react-icons/fa';
import { iconSize } from 'constants';
import {
  FrList,
  ItemFriends,
  FriendsBox,
  StatusFriends,
  AvatarFriends,
  NameFriends,
} from './FriendList.styled';

function FriendList({ items }) {
  return (
    <FrList>
      {items.map(({ avatar, name, isOnline, id }) => (
        <ItemFriends key={id}>
          <FriendsBox>
            <StatusFriends eventOnline={isOnline}>
              <FaAtom size={iconSize.sm} />
            </StatusFriends>
            <AvatarFriends src={avatar} alt={name} width="48" height="48" />
            <NameFriends>{name}</NameFriends>
          </FriendsBox>
        </ItemFriends>
      ))}
    </FrList>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;