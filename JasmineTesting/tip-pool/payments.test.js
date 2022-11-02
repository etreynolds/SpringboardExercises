describe("Payments test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
    });



    afterEach(function () {
        // teardown logic
        serverId = 0;
        serverTbody.innerHTML = '';
        allServers = {};
    });
})