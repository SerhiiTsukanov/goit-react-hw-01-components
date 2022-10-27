
import PropTypes from 'prop-types';
import css from '../Profile/Profile.css';

export default function User({ alt, username, tag, location, followers, views, likes }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={alt}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
    // <div class="profile">
    //   <div class="description">
    //     <img
    //       src={alt}
    //       alt="User avatar"
    //       class="avatar"
    //     />
    //     <p class="name">{username}</p>
    //     <p class="tag">{tag}</p>
    //     <p class="location">{location}</p>
    //   </div>

    //   <ul class="stats">
    //     <li>
    //       <span class="label">Followers</span>
    //       <span class="quantity">{followers}</span>
    //     </li>
    //     <li>
    //       <span class="label">Views</span>
    //       <span class="quantity">{views}</span>
    //     </li>
    //     <li>
    //       <span class="label">Likes</span>
    //       <span class="quantity">{likes}</span>
    //     </li>
    //   </ul>
    // </div>
  );
}

User.propTypes = {
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};