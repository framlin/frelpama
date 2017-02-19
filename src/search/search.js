let indexer = require('./indexer').Indexer,
    partIndex = indexer.getPartIndex();

function Search() {}

Search.prototype.find = function find(word) {
    return partIndex.find((part) => (part.key.toLowerCase() === word.toLowerCase()));
};

module.exports.Search = new Search();


console.log(module.exports.Search.find("TI"));