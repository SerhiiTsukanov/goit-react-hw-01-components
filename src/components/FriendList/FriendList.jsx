

import FriendListItem from '../FrendListItem/FriendListItem'
import {
  FrList
} from './FriendList.styled';


export default function FriendList({ friends }) {
    return (
     <FrList>
        {friends.map(friend => (
          
        <FriendListItem friends={friend} />
        )
        )} 
      </FrList>
    );
}



