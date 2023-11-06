import { secp256k1 } from '@noble/curves/secp256k1';
import { toHex } from 'ethereum-cryptography/utils';

function Transaction({ signature, message }) {

    let sig = secp256k1.Signature.fromCompact(signature);
    sig = sig.addRecoveryBit(0);
    const publicKey = sig.recoverPublicKey(message).toRawBytes();
    const address = toHex(publicKey.slice(-20));

    return (
        <tr key={signature}>
            <td>0x{address.slice(0, 10)}</td>
            <td>{signature}</td>
        </tr>
    )
}

export default Transaction;