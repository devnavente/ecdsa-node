import { useState } from "react";
import server from "./server";
import { secp256k1 } from '@noble/curves/secp256k1';
import { hashMessage } from "./scripts/utils";

function Transfer({ address, setBalance, privateKey, transactions, setTransactions }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });

      const timestamp = Date.now().toString();
      const message = hashMessage(timestamp);
      const signature = secp256k1.sign(message, privateKey).toCompactHex();

      const transaction = {
        message,
        signature
      };

      setTransactions([...transactions, transaction]);
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
