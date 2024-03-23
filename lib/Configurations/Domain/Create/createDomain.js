/* 
* Author Doğukan Karasansar
* karasansard@gmail.com
*/

"use strict"

const { executeCommand } = require('/lib/utils/executeCommand');

class CreateDomain {
    constructor(params) {
        this.path = params.directoryPath;
        this.domain = params.domain;
    }

    shellCommand() {
        return `mkdir -p ${this.path} ${this.domain}`;
    }

    async run() {
        await executeCommand(this.shellCommand());
    }
}

module.exports = CreateDomain;
