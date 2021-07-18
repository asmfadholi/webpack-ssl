const fs = require('fs');

module.exports = {
    devServer: {
        host: 'localhost',
        https: {
            key: fs.readFileSync('./.ssl/cert/CA/localhost/localhost.decrypted.key'),
            cert: fs.readFileSync('./.ssl/cert/CA/localhost/localhost.crt')
        },
    }
}