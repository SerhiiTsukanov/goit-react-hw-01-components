import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
function User(props) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={props.alt}
          alt="User avatar"
          class="avatar"
        />
        <p class="name">{props.username}</p>
        <p class="tag">{props.tag}</p>
        <p class="location">{props.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{props.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{props.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}



ReactDOM.render(
  <User
    username={user.username}
    alt={user.avatar}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />,
  document.querySelector('#root'));