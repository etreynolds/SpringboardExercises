
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual("103.64");
});


it("should return a result with 2 decimal places", function () {
  // ..
  const values1 = {
    amount: 20000,
    years: 15,
    rate: 5
  };
  expect(calculateMonthlyPayment(values1)).toEqual("158.16");
});

/// etc
it('should be able to calculate very large loan amount', () => {
  const values2 = {
    amount: 750000,
    years: 30,
    rate: 3.8
  };
  expect(calculateMonthlyPayment(values2)).toEqual("3494.68");
})