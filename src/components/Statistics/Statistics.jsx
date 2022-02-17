import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      <h2 className="">{title}</h2>
      <ul className={s.list}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <span className="">{stat.label}</span>
            <span className="">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
