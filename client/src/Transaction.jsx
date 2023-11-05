import { secp256k1 } from '@noble/curves/secp256k1';

function Transaction({signature, message}) {

    let uncompacted = secp256k1.Signature.fromCompact(signature);
    const publicKey = uncompacted.recoverPublicKey(message).toRawBytes();
    const address = toHex(publicKey.slice(-20));

    console.log(address)

    return (
        <li className="card transaction" key={signature}>
            Transaction by: <br/>
            {signature}
        </li>
    )
}

export default Transaction;