var expect = require("chai").expect;
var protoUnicorn = require("../protoUnicorn")();


describe("Simple test a sumar", function() {
  describe("probando suma...", function() {
    it("suma básica", function() {

      expect(Math.sumar(2,2)).to.equal(4);

    });
  });
});