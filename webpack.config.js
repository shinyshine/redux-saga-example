const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'dev' || !TARGET) {
    module.exports = require('./build/webpack.config.dev');
    console.info('--> ./config/webpack.config.dev.js');
}
// if (TARGET === 'build' || TARGET === 'stats') {
//     module.exports = require('./config/webpack.config.prod');
//     console.info('--> ./config/webpack.config.prod.js');
// }
