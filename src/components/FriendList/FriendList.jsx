import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    
    return (
        <ul className={css.friend_list}>
            <FriendListItem
                friends={friends}
                
            />
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array
}




