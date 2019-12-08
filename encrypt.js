// file: encrypt.js
// https://nodejs.org/api/crypto.html#crypto_crypto_publicencrypt_key_buffer

const crypto = require('crypto');

function encryptWithPublicKey(publicKey, message) {
    
    const bufferMessage = Buffer.from(message, 'utf8');
    
    return crypto.publicEncrypt(publicKey, bufferMessage);
    
}

function encryptWithPrivateKey(privateKey, message) {
    
    const bufferMessage = Buffer.from(message, 'utf8');
    
    return crypto.privateEncrypt(privateKey, bufferMessage);
}

module.exports.encryptWithPublicKey = encryptWithPublicKey;
module.exports.encryptWithPrivateKey = encryptWithPrivateKey;
