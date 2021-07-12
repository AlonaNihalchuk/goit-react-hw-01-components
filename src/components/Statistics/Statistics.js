import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import getRandomColor from './randomColor';

function Statistics({ title, stats, options }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(statsItem => (
          <li
            className={styles.item}
            key={statsItem.id}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <span className={styles.label}>{statsItem.label}</span>
            <span className={styles.percentage}>{statsItem.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
