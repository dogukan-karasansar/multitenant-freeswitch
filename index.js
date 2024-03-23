/* 
* Author Doğukan Karasansar
* karasansard@gmail.com
*/

"use strict"

require('./config');


/* module configuration classes */
const Domain = require('/lib/Configurations/Domain/domain');

class FreeswitchM {
    constructor(params) {
        this.domain = new Domain({ directoryPath: directoryPath });
    }
}

module.exports = FreeswitchM;