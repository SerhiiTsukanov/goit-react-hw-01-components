import Profile from './Profile';
import Statistics from './Statistics';
import user from '../user.json'; 
import data from '../data.json';

// const data = data[1];
console.log(data);

export default function App() {
  return (
    // <div
    // >
    //   <Profile
    //     username={user.username}
    //     alt={user.avatar}
    //     tag={user.tag}
    //     location={user.location}
    //     followers={user.stats.followers}
    //     views={user.stats.views}
    //     likes={user.stats.likes}
    //   />
    // </div>,
    // <div>
    //   <Statistics
    //     title="Upload stats"
    //     stats={data} />
      
    //   </div>,
    <div>
        <Statistics stats={data} />
    </div>
  );
};
