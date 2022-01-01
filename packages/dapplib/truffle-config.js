require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rate nominee concert hope kangaroo army general'; 
let testAccounts = [
"0xc2336536b3cbe649030fabcf44b50bc38072bccbe76f777b7d8c07f70d33875a",
"0x3959e3720f6fbf79e5c3d7ede7e4f256b399e3f5caee389bfd96b19694aad055",
"0xe39f7c8c256b22b2defa43f0cbacf99c6f5fac47a118f665b8de3e76d8cb2b38",
"0x2d3b383b539a7dac5b5d78dcde19a822fdd934261d6dd7e37f1e75e701a25522",
"0x0c61c97748cf2e4ef0eddcf7754d8240e89fbc830901b27feef82cd57f07da98",
"0xc7021e1f8cb129cab87ca8a0b96a59c11355ac6b329a428bd8238bf953e6bfff",
"0xfcc464bf744ab8dce3b88d0171d967b28a1cd4be941eee8f299dd032918c671a",
"0x091bb311890b670642accfd73e0b10baa6637708c8985d6786a3443bc33de3c8",
"0x712accc851743f6ceac79611cfe6f0c9e4ad3c3f1238a925b87e402838eed259",
"0x8e1beafaf6d466eced3d50c6c91f09c4da6864be634f827324a9e738c81d0363"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


