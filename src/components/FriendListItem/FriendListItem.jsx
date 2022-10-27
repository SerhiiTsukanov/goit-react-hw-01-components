
// import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ friends }) {
    return (
        <li className={css.item}>
            {friends.map(friend => (
                <div className={css.box} key={friends.id}>
                    <span className={css.status}>{friend.isOnline}</span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>  
                </div>
               
            ))}
            
        </li>
    );
}


