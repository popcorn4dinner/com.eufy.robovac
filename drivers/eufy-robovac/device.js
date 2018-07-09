'use strict';

const Homey = require('homey');
const util = require('homey-rfdriver').util;

module.exports = RFDevice => class EufyRobovacDevice extends RFDevice {

    onRFInit() {
        super.onRFInit();

        // Init your device here
    }

};
