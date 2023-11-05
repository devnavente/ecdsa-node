const secp = require('ethereum-cryptography/secp256k1').secp256k1;
const { toHex } = require('ethereum-cryptography/utils');

/**
 * Generates a new address, with private key and signature
 * @returns {String} generated address
 */
const generateAddress = () => {
    const privateKey = secp.utils.randomPrivateKey();
    //const message = new Uint8Array(32).fill(1);
    
    //const signature = secp.sign(message, privateKey).toCompactHex();
    
    const publicKey = secp.getPublicKey(privateKey);
    const address = toHex(publicKey.slice(-20));

    console.log('NEW ADDRESS--------------------------');
    console.log('Private Key ' + toHex(privateKey));
    console.log('Address ' + address);

    //let sig = secp.Signature.fromCompact(signature.toCompactHex());

    return address;
}

/**
 * Generates a list of new addresses
 * @param {Number} quantity of addresses to generate
 */
exports.generateAddresses = quantity => {
    if (isNaN(quantity) || quantity <= 0) quantity = 1;

    const list = {};
    let address = null;

    for (let i = 1; i <= quantity; i++) {
        address = generateAddress();
        list[address] = generateRandomBalance();
    }

    return list;
};

/**
 * Generates a random balance between 10 and 200
 * @returns {Number}
 */
const generateRandomBalance = () => Math.floor((Math.random() * 200) + 10);