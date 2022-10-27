import PropTypes from 'prop-types';
import css from './Statistics.css';

export default function Statistics({ title, stats }) {

    return (
        <section class="statistics">
            
            {title && <h2 class="title">{title}</h2>}
            <ul class="stat__list">
                <li class="item" style={{backgroundColor: getRandomColor()}}>
                    <span class="label">{stats[0].label}</span>
                    <span class="percentage">{stats[0].percentage}</span>
                </li>
                <li class="item" style={{backgroundColor: getRandomColor()}}>
                    <span class="label">{stats[1].label}</span>
                    <span class="percentage">{stats[1].percentage}</span>
                </li>
                <li class="item" style={{backgroundColor: getRandomColor()}}>
                    <span class="label">{stats[2].label}</span>
                    <span class="percentage">{stats[2].percentage}</span>
                </li>
                <li class="item" style={{backgroundColor: getRandomColor()}}>
                    <span class="label">{stats[3].label}</span>
                <span class="percentage">{stats[3].percentage}</span>
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
