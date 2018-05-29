// This initializes the web3 object.

var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    // MetaMask or Mist
    web3 = new Web3(web3.currentProvider);
}
else {
    // Rinkeby
    web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/ZVNSPmnOKcVQz4S27XhX'));

    // Main
    // web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/ZVNSPmnOKcVQz4S27XhX'));
}

Template.body.onRendered(function() {
    let settings = 'settings.json';
    this.autorun(() => {
        if (particlesJS) {
            particlesJS.load('particles-js', settings, function () {
                console.log('Successfully loaded beautiful particles!');
            });
        }
    });
});