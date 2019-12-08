// file: verifyIdentity.js

const crypto = require('crypto');
const fs = require('fs');
const decrypt = require('./decrypt');

// This is the data that we are receiving from the sender
const receivedData = require('./signMessage');

// Use the hash function provided!
const hash = crypto.createHash(receivedData.algorithm);

// We have the sender's public key here:
const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');




// ==================================
// Step 1: Decrypt the signed message
// ==================================
const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData);

// By default, returns a Buffer object, so convert to string
const decryptedMessageHex = decryptedMessage.toString();





// ========================================
// Step 2: Take a hash of the original data
// ========================================
const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
const hashOfOriginalHex = hash.digest('hex');





// ========================================
// Step 3: Check if two hashes match
// ========================================
if (hashOfOriginalHex === decryptedMessageHex) {
    console.log('Success!  The data has not been tampered with and the sender is valid.')
} else {
    console.log('Uh oh... Someone is trying to manipulate the data or someone else is sending this!  Do not use!');
}