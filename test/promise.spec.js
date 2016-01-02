var expect    = require("chai").expect;
var Promise = require("../index.js");

describe("Testing tiny-promise module", function() {
  
  describe("Returns an expected response", function() {
    it("passes success", function() {
        new Promise(function RunSuccessProcess(ok, fail){
            var i;
            for(i = 0; i < 10; i++){}
            i === 10 ? ok('i is equal to 10') : fail('i is not equal to 10')
        }).then(function finish(data){
            expect(data).to.be.eql('i is equal to 10');
        }).catch(function reject(data){
            expect(data).to.be.eql(null);
        });
    });

    it("passes reject", function() {
        new Promise(function RunSuccessProcess(ok, fail){
            var i;
            for(i = 0; i < 10; i++){}
            i !== 10 ? ok('i is equal to 10') : fail('i is not equal to 10')
        }).then(function finish(data){
            expect(data).to.be.eql(null);
        }).catch(function reject(data){
            expect(data).to.be.eql('i is not equal to 10');
        });
    });    
  });

});