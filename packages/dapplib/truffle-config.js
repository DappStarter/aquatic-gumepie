require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note oven pumpkin grace local flock gasp'; 
let testAccounts = [
"0xf8da2b5c2be0076bda6f7be6256a04dfdddd560add9cb932789e29a0b39d126a",
"0xb248757baa66544b9f455b273cc8490927d739cbf56196a20ce63967839aa719",
"0x60bdb319e4f24e3d595b293b8825cd03052cb6e63d857302d7bf01664e9d2661",
"0x8ff645c9889150f4c38eabed8ac57a1b967e56a5dba7d26890e300a96137f0c3",
"0xf55b2e8135c08ff8540e4335842fe3b8e87ee9cf4d2a925a3ab3096d393a54e0",
"0x4802097bfb302d241173486f31dea4dca1ff5f527a2ed5012124a667d6d79f2c",
"0x9814399ed5f68d500b99af4fde916871d4ec49a90d190f2f40b9d910c849f7cc",
"0xac8563206f9a9da9714e031aac3400a5786f2e1525b4dbf4d9481b2836badd8f",
"0x29539f5a678990a4699c5fbed9900e302b9fb42ac6dbd7ac001233af9d17dd9d",
"0xd20f8c1b94c728880f0947a4e87986e33022abfa762d458fe0910d18eb5b1fa1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
