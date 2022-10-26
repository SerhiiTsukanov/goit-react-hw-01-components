import css from '../Transactions/Transactions.css';

export default function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody key={items.id}>
                {items.map(item => (
                <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
                
                ))}
                
            </tbody>
        </table>
    );
}

// TransactionHistory.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         amount: PropTypes.number.isRequired,
//         currency: PropTypes.string.isRequired
//     }))
// }
