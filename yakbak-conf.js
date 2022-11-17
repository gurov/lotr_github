const express = require('express');
const yakbak = require('yakbak');
const {pick, omit} = require('ramda');


const record = process.argv.includes('record') || false;
const base64 = (s) => Buffer.from(s).toString('base64');
const getUrlName = (req) => req.url.replace(/\//gi, '__').split('?')[0];
const getQueryHash = (req, queryParams) => base64(JSON.stringify(omit(queryParams, req.query)));

const omittedParameters = [
    'start',
    'end'
];

const yak = yakbak('https://api.github.com', {
    dirname: __dirname + '/tapes',
    noRecord: !record,
    hash: (req, body) => {
        const name = getUrlName(req);
        const queryHash = getQueryHash(req, omittedParameters);

        return `${name}__${req.method}__${queryHash}`;
    }
});

express().use(function (req, res, next) {
    yak(req, res);
}).listen(3111);