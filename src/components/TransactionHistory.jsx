export default function TransactionHistory({items}) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td>{items[0].type}</td>
                <td>{items[0].amount}</td>
                <td>{items[0].currency}</td>
                </tr>
                <tr>
                <td>{items[1].type}</td>
                <td>{items[1].amount}</td>
                <td>{items[1].currency}</td>
                </tr>
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
