import Transaction from "./Transaction";

function Transactions({ transactions }) {
    return (
        <div className="container transactions">
            { transactions.length > 0 ? 
                <ul>
                    {transactions.map( data => (
                        <Transaction signature={data.signature} message={data.message} />
                    ))}
                </ul> : 
                <p>No transactions</p>
            }
        </div>
    );
}

export default Transactions;