import Transaction from "./Transaction";

function Transactions({ transactions }) {
    return (
        <div className="container transactions">
            {transactions.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Sender</th>
                            <th>Digital Signature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(data => (
                            <Transaction signature={data.signature} message={data.message} />
                        ))}
                    </tbody>
                </table> :
                <p>No transactions</p>
            }
        </div>
    );
}

export default Transactions;