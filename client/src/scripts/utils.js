import { utf8ToBytes } from 'ethereum-cryptography/utils';
import { keccak256 } from 'ethereum-cryptography/keccak';

/**
 * Hashes message
 * @returns {String}
 */
const hashMessage = (msg) => {
    const bytes = utf8ToBytes(msg);

    return keccak256(bytes);
};

export {
    hashMessage
};