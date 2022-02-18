import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span className={friend.isOnline ? s.online : s.offline}></span>
          <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
        ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
