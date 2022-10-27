
import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ friends }) {
    return (
     <ul className={css.friend_list}>
        {friends.map(friend => (
        <li className={css.item} key={friends.id}>
            
                <div className={css.box} >
                    <span className={css.status} color={({ eventOnline, theme }) => {
    return eventOnline ? theme.colors.green : theme.colors.red;
  }}>{friend.isOnline}</span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>  
                </div>
               
            </li>
         ))} 
         </ul> 
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
