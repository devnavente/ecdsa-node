import Wallet from "./Wallet";
import Transfer from "./Transfer";
import Transactions from "./Transactions";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        setAddress={setAddress}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
      />
      <Transfer 
        setBalance={setBalance} 
        address={address} 
        privateKey={privateKey} 
        transactions={transactions} 
        setTransactions={setTransactions} 
      />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
