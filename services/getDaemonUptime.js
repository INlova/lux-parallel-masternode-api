const exec = require('./exec');

module.exports = () => exec('pgrep luxd')
    .then(pid => {
        if (pid) {
            return exec(`ps -p "${pid.trim()}" -o etime=`);
        }

        return '';
    });
