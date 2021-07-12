import PropTypes from 'prop-types';
import demoImg from '../demo.jpg';
import styles from './FriendList.module.css';

function FriendListItem({ avatar = demoImg, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
