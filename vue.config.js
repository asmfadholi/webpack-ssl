const fs = require('fs');

module.exports = {
    devServer: {
        port: 8000,
        public: 'no-valid-link:8000',
        https: {
            key: fs.readFileSync('./.ssl/cert/CA/localhost/localhost.decrypted.key'),
            cert: fs.readFileSync('./.ssl/cert/CA/localhost/localhost.crt')
        },
    }
}