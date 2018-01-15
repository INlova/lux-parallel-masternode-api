const fetch = require('node-fetch');
const { load } = require('cheerio');

const LUX_EXPLORER = 'http://explorer.luxcore.io/';

const getCount = $ => $('.block').first().closest('p').next().next().children('a').text();

const getActualBlocksCount = () =>
    fetch(LUX_EXPLORER)
        .then(response => response.text())
        .then(body => {
            const $ = load(body);

            return getCount($);
        })
        .catch(() => Promise.resolve('Error getting actual blocks count!'));

module.exports = getActualBlocksCount;
