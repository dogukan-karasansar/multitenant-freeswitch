/* 
* Author Doğukan Karasansar
* karasansard@gmail.com
*/

"use strict"

const CreateDomain = require('./Create/createDomain');

class Domain {
    constructor(params) {
        this.directoryPath = params.directoryPath;
    }

    async create(domain) {
        const createDomain = new CreateDomain(
            {
                directoryPath: this.directoryPath,
                domain: domain
            }
        );

        await createDomain.run();
    }
}

module.exports = Domain;