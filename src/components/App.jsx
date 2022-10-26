import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/Transactions';
import user from '../user.json'; 
import data from '../data.json';
import friends from '../friends';
import transactions from '../transactions';

// console.log(data);

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        alt={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    
      <Statistics
        title="Upload stats"
        stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
