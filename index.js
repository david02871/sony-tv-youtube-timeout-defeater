#! /usr/bin/env node

const argv = require('yargs').argv;
const Request = require('request');

let callInProgress = false;

const host = ('host' in argv) ? argv.host : '192.168.1.1';
const port = ('port' in argv) ? argv.port : '80';
const authkey = ('authkey' in argv) ? argv.authkey : '0000';

const dPadCenterBtn = 'AAAAAgAAAJcAAABKAw==';

let body = `<?xml version="1.0"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <s:Body>
        <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
            <IRCCCode>${dPadCenterBtn}</IRCCCode>
        </u:X_SendIRCC>
    </s:Body>
</s:Envelope>`;

const options = {
    url: `http://${host}:${port}/sony/IRCC`,
    path: '/IRCC',
    timeout: 5000,
    body,
    method: 'POST',
    headers: {
        'Content-Type': 'text/xml; charset=UTF-8',
        'SOAPACTION': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
        'X-Auth-PSK': '0000'
    }
};

function pressButton() {
    if (callInProgress) {
        return;
    }

    callInProgress = true;
    Request.post(options, (error, response, body) => {
        if (!error) {
            console.log('Button pressed');
        } else {
            console.log(error);
        }

        callInProgress = false;
    });
}

pressButton();
setInterval(pressButton, 20000);