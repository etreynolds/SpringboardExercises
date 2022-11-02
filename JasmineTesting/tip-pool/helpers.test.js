describe("Helpers test (with setup and tear-down)", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    })



    afterEach(function () {

        serverId = 0;
        serverTbody.innerHTML = '';
        allServers = {};
    });
})