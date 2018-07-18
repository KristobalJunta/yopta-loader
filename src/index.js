const yopta = require('yopta/src/core');

module.exports = function (source) {
    return yopta.compile(source, 'ys');
}
