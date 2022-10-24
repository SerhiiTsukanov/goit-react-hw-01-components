export default function FriendListItem({friends}) {
    return (
        <li class="item">
            <span class="status">{friends[0].isOnline}</span>
            <img class="avatar" src={friends[0].avatar} alt="User avatar" width="48" />
            <p class="name">{friends[0].name}</p>
        </li>
    );
}



