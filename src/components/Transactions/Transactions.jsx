import css from '../Transactions/Transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
      <thead>
        <tr>
          <th className={css.thead__th}>Type</th>
          <th className={css.thead__th}>Amount</th>
          <th className={css.thead__th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }))
}
