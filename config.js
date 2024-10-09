const {
    Connection,
    Keypair,
} = require('@solana/web3.js')
const bs58 = require('bs58')

const PRIVATE_KEY = "5udBUTr6zXb8m2mdDd4qNwR3GiuCs88Mdi66poi1obzPcnJXbv2RjK492r9y1adszeeMXrQ837Nerw2iMZY42fD9"; // Private Key of Deployer
const endpoint = "https://api.devnet.solana.com"; // RPC ENDPOINT

//export const rpc = 'https://api.devnet.solana.com'; // ENTER YOUR RPC
//export const rpc = 'https://api.mainnet-beta.solana.com';
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY3N2ZFYzhmZDc3QzI2OTgwMDBkQjg0RjNiMTM5MEVCRTM4MEU4M0YiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwODYxOTgxMTA3MiwibmFtZSI6InNoaXRjb2lucyJ9.zAvvtUVe6mY-sTxxnJ_lr23H3TnhoodnWurcftpMQxc';
const revokeMintBool = true
const revokeFreezeBool  = true


let tokenInfo = {
    amount: 1000000000,
    decimals: 9,
    metadata: '', // LEAVE EMPTY
    symbol: 'andrew', // Token Symbol
    tokenName: 'andrew coin' // Token Name 
}


let metaDataforToken = {
    "name": tokenInfo.tokenName,
    "symbol": tokenInfo.symbol,
    "image": '', // LEAVE EMPTY
    "description": 'meme token using jito', // Put your Description between ``
    "extensions": {
        "website": "meme.com",// Put your website between ""
        "twitter": "x.com",// Put your twitter between ""
        "telegram": "t.me:meme"// Put your telegram between ""
    },
    "tags": ["SOLANA","MEME"]
}

// Ignore these
const connection = new Connection(endpoint);
const myKeyPair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(PRIVATE_KEY)));


module.exports = {
    connection,
    myKeyPair,
    NFT_STORAGE_TOKEN,
    revokeMintBool,
    revokeFreezeBool,
    tokenInfo,
    metaDataforToken
};