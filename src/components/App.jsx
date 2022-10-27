import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './Transactions/Transactions';
import user from '../user.json'; 
import data from '../data.json';
import friends from '../friends';
import transactions from '../transactions';


export default function App() {
  return (
    <div
    style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '600px',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}>
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

      <FriendListItem friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
