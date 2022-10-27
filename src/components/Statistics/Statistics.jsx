import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {

    return (
        <section className={css.statistics}>
            
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat__list}>
                <li className={css.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{stats[0].label}</span>
                    <span className={css.percentage}>{stats[0].percentage}</span>
                </li>
                <li className={css.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{stats[1].label}</span>
                    <span className={css.percentage}>{stats[1].percentage}</span>
                </li>
                <li className={css.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{stats[2].label}</span>
                    <span className={css.percentage}>{stats[2].percentage}</span>
                </li>
                <li className={css.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{stats[3].label}</span>
                    <span className={css.percentage}>{stats[3].percentage}</span>
                </li>
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired  
    })),
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
