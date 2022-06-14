const cds = require('@sap/cds');
const db = cds.connect("db");


module.exports = cds.service.impl(async (srv) => {
    srv.before('READ', 'Books', async () => {
    });

    srv.before('CREATE', 'Books', async (req) => {
    });
});